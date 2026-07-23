# 16 — Baileys WhatsApp bot (Docker)

Bot Node.js yang memiliki handler sendiri—berbeda dari WAHA yang menyediakan REST gateway. Jalankan dan scan QR yang muncul di log; kirim `ping` untuk mencoba balasan `pong`.

```bash
docker compose up --build
curl http://localhost:3001/health
```

Sesi disimpan dalam named volume. Untuk link ulang setelah logout: `docker compose down -v`. Tambahkan validasi sender, rate limit, observability, dan webhook/API internal sebelum memakai bot untuk workflow nyata. Gunakan sesuai kebijakan WhatsApp serta dengan consent pengguna.
