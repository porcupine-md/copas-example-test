# 12 — WordPress + WooCommerce (Docker)

E-commerce stack untuk handoff agency. Image sudah membawa plugin WooCommerce; aktifkan melalui **Plugins** setelah menyelesaikan wizard WordPress.

```bash
cp .env.example .env
docker compose up --build
```

Buka http://localhost:8082. Di produksi gunakan MySQL managed, volume persisten untuk `wp-content`, HTTPS, serta secret environment. Jangan expose phpMyAdmin atau kredensial database publik.
