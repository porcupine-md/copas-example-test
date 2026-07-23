# 06 — Laravel + MySQL

Laravel 12 minimal yang menjalankan migration serta seed tiga record saat container dimulai. Endpoint `/` membaca data dari MySQL, sedangkan `/health` dipakai untuk pemeriksaan layanan.

## Jalankan lokal

Docker Desktop diperlukan.

```bash
cp .env.example .env
docker compose up --build
```

Buka <http://localhost:8001>, lalu cek:

```bash
curl http://localhost:8001/health
```

Untuk menghapus database lokal dan memulai ulang:

```bash
docker compose down -v
```

## Konfigurasi MySQL

Laravel menggunakan variabel standar berikut:

```env
DB_CONNECTION=mysql
DB_HOST=<host-mysql>
DB_PORT=3306
DB_DATABASE=<nama-database>
DB_USERNAME=<user>
DB_PASSWORD=<password>
```

`compose.yaml` menyediakan MySQL lokal. Untuk go live, buat/provision MySQL managed terlebih dahulu, lalu simpan lima variabel tersebut sebagai secret environment di aplikasi. Aplikasi akan menjalankan `php artisan migrate --force --seed` saat start; pastikan database sudah tersedia sebelum deploy.

## Deploy

Deploy direktori ini sebagai Docker app dan gunakan port `8000`:

```bash
copas up --project <project> --name laravel-mysql --path . --port 8000
```

Masukkan `APP_KEY` dan kredensial MySQL melalui konfigurasi secret deployment; jangan commit `.env`.
