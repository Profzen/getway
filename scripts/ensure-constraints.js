const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const dotenv = require('dotenv');

const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) dotenv.config({ path: envPath });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL missing');
  process.exit(1);
}

async function run() {
  const client = new Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    console.log('Creating unique index on public.profiles(user_id) if not exists');
    await client.query("CREATE UNIQUE INDEX IF NOT EXISTS uq_profiles_user_id ON public.profiles(user_id);");
    console.log('Index ensured.');
  } catch (err) {
    console.error('Failed to ensure constraints:', err);
  } finally {
    await client.end();
  }
}

run();
