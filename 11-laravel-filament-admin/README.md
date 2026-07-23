# 11 — Laravel + Filament admin (Docker)

Admin/CMS starter untuk agency: Laravel, MySQL, dan Filament panel di `/admin`.

```bash
cp .env.example .env
docker compose up --build
```

Buka http://localhost:8001/admin. Setelah kontainer hidup, buat admin pertama:

```bash
docker compose exec app php artisan make:filament-user
```

`composer.lock` dikomit agar build dapat direproduksi. Image memasang ekstensi PHP `intl` dan `pdo_mysql`; `docker-entrypoint.sh` menjalankan migrasi lalu mengeksekusi server foreground di `0.0.0.0:${PORT:-8000}`. Produksi membutuhkan MySQL managed dan `APP_KEY` unik.
