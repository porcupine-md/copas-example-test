# 14 — FastAPI + React (Docker)

Full-stack starter: React dibuild menjadi static UI dan Nginx mem-proxy `/api/*` ke FastAPI. Ini menghindari URL backend/CORS yang tersebar pada frontend.

```bash
docker compose up --build
curl http://localhost:8083/api/health
```

Buka http://localhost:8083. Untuk produksi, ganti demo API dengan database managed dan batasi `allow_origins` ke domain yang digunakan.
