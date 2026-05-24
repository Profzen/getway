const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');
const dotenv = require('dotenv');

const localEnvPath = path.resolve(process.cwd(), '.env.local');

if (fs.existsSync(localEnvPath)) {
  dotenv.config({ path: localEnvPath });
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL is required. Add it to .env.local before running this script.');
  process.exit(1);
}

const client = new Client({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await client.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS public.example_items (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
    `);

    const result = await client.query(`
      SELECT to_regclass('public.example_items') AS table_name;
    `);

    console.log('Table created or already present:', result.rows[0].table_name);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error('Failed to create example table:');
  console.error(error);
  process.exit(1);
});