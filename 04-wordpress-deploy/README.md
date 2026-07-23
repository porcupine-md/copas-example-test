# 04 — WordPress + MySQL

Contoh WordPress standar dengan MySQL. Image WordPress membuat `wp-config.php` dari variabel `WORDPRESS_DB_*`; kemudian setup wizard WordPress membuat tabel dan akun admin pada kunjungan pertama.

## Jalankan lokal

Docker Desktop diperlukan.

```bash
cp .env.example .env
docker compose up --build
```

Buka <http://localhost:8080>. Pada wizard, pilih bahasa lalu isi judul situs, akun admin, dan password. Database sudah tersedia melalui service `db`; tidak perlu membuat tabel secara manual.

Data WordPress (`wordpress_data`) dan MySQL (`mysql_data`) disimpan dalam named volume. Untuk menghapus seluruh instalasi lokal:

```bash
docker compose down -v
```

## Konfigurasi database

WordPress memakai konfigurasi standar berikut:

```env
WORDPRESS_DB_HOST=<host-mysql>:3306
WORDPRESS_DB_NAME=<nama-database>
WORDPRESS_DB_USER=<user>
WORDPRESS_DB_PASSWORD=<password>
```

Compose mengarahkan host ke service `db`. Untuk produksi, provision MySQL managed terlebih dahulu lalu masukkan empat variabel tersebut sebagai secret environment. Mount persistent volume ke `/var/www/html/wp-content` agar upload, plugin, dan theme tidak hilang saat redeploy.

## Deploy

Deploy sebagai Docker app pada port `80` setelah database tersedia:

```bash
copas up --project <project> --name wordpress-mysql --path . --port 80
```

Setelah aplikasi live, selesaikan wizard pada URL publik. Jangan commit `.env` atau kredensial produksi.
