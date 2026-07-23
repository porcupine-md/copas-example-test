# 15 — WAHA REST gateway (Docker)

WhatsApp gateway siap agency: REST API, Swagger, dashboard, dan volume sesi persisten. WAHA memudahkan integrasi dari website, CRM, atau backend apa pun tanpa menulis client WhatsApp sendiri.

```bash
cp .env.example .env
# ganti semua secret
docker compose up -d
```

Akses Swagger/dashboard melalui http://localhost:3000. Buat sesi lalu scan QR dari API/dashboard. Port hanya dibind ke localhost: untuk produksi gunakan reverse proxy HTTPS dan jangan membuka dashboard/Swagger tanpa autentikasi. Pastikan penggunaan Anda mematuhi kebijakan WhatsApp dan consent penerima.
