import { getPool } from "../db/client.mjs";

export const dynamic = "force-dynamic";

export default async function Home() {
  let messages = [];
  let error = null;

  try {
    const result = await getPool().query(
      "SELECT id, author, body FROM messages ORDER BY id ASC"
    );
    messages = result.rows;
  } catch (caughtError) {
    error = caughtError instanceof Error ? caughtError.message : "Unknown database error";
  }

  return (
    <main>
      <p className="eyebrow">Copas deployment check / 03</p>
      <h1>Hello,<br />World!</h1>
      <p className="intro">This React page reads its message board from PostgreSQL.</p>
      {error ? (
        <section className="status error">
          <strong>Database not connected yet.</strong>
          <span>{error}</span>
        </section>
      ) : (
        <section className="status success">
          <strong>PostgreSQL connected.</strong>
          <span>{messages.length} seeded messages loaded.</span>
        </section>
      )}
      <ol className="messages">
        {messages.map((message) => (
          <li key={message.id}><b>{message.author}</b><span>{message.body}</span></li>
        ))}
      </ol>
    </main>
  );
}
