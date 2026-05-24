const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const { Client } = require('pg');

const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) dotenv.config({ path: envPath });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required in .env.local');
  process.exit(1);
}

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

async function createAuthUser(email, password) {
  // Using the Admin API to create a user
  try {
    // supabase-js v2 exposes admin methods under auth.admin
    const res = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    return res.data?.user ?? res.user ?? null;
  } catch (err) {
    console.error('Admin createUser failed:', err?.message || err);
    return null;
  }
}

async function run() {
  // create roles in DB and then create 2 auth users and profiles
  if (!DATABASE_URL) {
    console.error('DATABASE_URL missing; cannot seed roles/profiles');
    process.exit(1);
  }

  const pg = new Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await pg.connect();

  try {
    // ensure roles exist
    const roles = ['admin', 'user'];
    for (const r of roles) {
      await pg.query('INSERT INTO public.roles(name) VALUES($1) ON CONFLICT (name) DO NOTHING', [r]);
    }

    console.log('Roles ensured.');

    // create admin user via Supabase Admin
    const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@getway.local';
    const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'AdminPass123!';
    const normalEmail = process.env.SEED_USER_EMAIL || 'user@getway.local';
    const normalPassword = process.env.SEED_USER_PASSWORD || 'UserPass123!';

    console.log('Creating auth users (admin & user) via Supabase Admin API...');
    const adminUser = await createAuthUser(adminEmail, adminPassword);
    const normalUser = await createAuthUser(normalEmail, normalPassword);

    console.log('Created users:', { adminUser: adminUser?.id, normalUser: normalUser?.id });

    // insert profiles and assign roles
    if (adminUser && adminUser.id) {
      await pg.query(
        'INSERT INTO public.profiles(user_id, full_name, metadata) VALUES($1, $2, $3) ON CONFLICT (user_id) DO NOTHING',
        [adminUser.id, 'Admin User', JSON.stringify({ seed: true })]
      );
      const res = await pg.query('SELECT id FROM public.roles WHERE name = $1', ['admin']);
      if (res.rows[0]) {
        await pg.query('INSERT INTO public.user_roles(user_id, role_id) VALUES($1, $2) ON CONFLICT DO NOTHING', [adminUser.id, res.rows[0].id]);
      }
    }

    if (normalUser && normalUser.id) {
      await pg.query(
        'INSERT INTO public.profiles(user_id, full_name, metadata) VALUES($1, $2, $3) ON CONFLICT (user_id) DO NOTHING',
        [normalUser.id, 'Normal User', JSON.stringify({ seed: true })]
      );
      const res2 = await pg.query('SELECT id FROM public.roles WHERE name = $1', ['user']);
      if (res2.rows[0]) {
        await pg.query('INSERT INTO public.user_roles(user_id, role_id) VALUES($1, $2) ON CONFLICT DO NOTHING', [normalUser.id, res2.rows[0].id]);
      }
    }

    console.log('Seeding complete. Credentials:');
    console.log(`Admin -> ${adminEmail} / ${adminPassword}`);
    console.log(`User  -> ${normalEmail} / ${normalPassword}`);
    console.log('You can use these credentials to sign in via the web UI (email/password)');
  } catch (err) {
    console.error('Seeding failed:', err?.message || err);
  } finally {
    await pg.end();
  }
}

run();
