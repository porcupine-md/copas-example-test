import pg from "pg";

let pool;

export function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }
  pool ??= new pg.Pool({ connectionString: process.env.DATABASE_URL });
  return pool;
}
