import pg from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required.");
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });

try {
  await client.connect();
  await client.query("BEGIN");
  await client.query("SELECT pg_advisory_xact_lock(735101);");
  await client.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      author TEXT NOT NULL,
      body TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  const result = await client.query(`
    INSERT INTO messages (author, body)
    SELECT author, body
    FROM (VALUES
      ('Tobee', 'Your database is connected.'),
      ('Copas', 'This dummy message came from PostgreSQL.'),
      ('Hello World', 'Seed complete. Ready to deploy.')
    ) AS seed(author, body)
    WHERE NOT EXISTS (SELECT 1 FROM messages);
  `);

  await client.query("COMMIT");
  console.log(result.rowCount ? "Initialized 3 dummy messages." : "Database already initialized.");
} catch (error) {
  await client.query("ROLLBACK").catch(() => {});
  throw error;
} finally {
  await client.end();
}
