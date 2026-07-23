import pg from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required. Copy .env.example to .env first.");
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });

try {
  await client.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      author TEXT NOT NULL,
      body TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await client.query("TRUNCATE messages RESTART IDENTITY;");
  await client.query(
    "INSERT INTO messages (author, body) VALUES ($1, $2), ($3, $4), ($5, $6);",
    ["Tobee", "Your database is connected.", "Copas", "This dummy message came from PostgreSQL.", "Hello World", "Seed complete. Ready to deploy."]
  );
  console.log("Seeded 3 dummy messages.");
} finally {
  await client.end();
}
