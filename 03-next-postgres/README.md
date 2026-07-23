# 03 — Next.js + PostgreSQL

A React/Next.js app that reads three seeded dummy messages from PostgreSQL.

## Run locally

```bash
npm install
docker compose up -d
cp .env.example .env
npm run db:seed
npm run dev
```

Then open <http://localhost:3000>. Validate the production build with:

```bash
npm run build
npm run start
```

## Deployment

Deploy this directory as a Node/Next.js project. Configure `DATABASE_URL` as a deployment secret, provision PostgreSQL in the target environment, then run `npm run db:seed` against that database once. Do not commit `.env`.
