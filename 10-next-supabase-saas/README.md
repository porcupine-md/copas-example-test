# 10 — Next.js + Supabase SaaS starter (non-Docker)

Cocok untuk vibecoder: Next.js App Router sebagai UI/API layer dan Supabase untuk Postgres, Auth, Storage, serta Realtime.

```bash
cp .env.example .env.local
npm install
npm run dev
npm run build && PORT=3000 npm run start
```

Tambahkan tabel dan RLS policy di Supabase sebelum menyimpan data pelanggan. Jangan taruh `service_role` key di variabel `NEXT_PUBLIC_*`.
