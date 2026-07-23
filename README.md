# Copas deploy examples

Enam belas proyek kecil dan independen untuk memeriksa jalur deployment Copas. Deploy satu direktori dalam satu waktu. Contoh **non-Docker** dipisahkan dari contoh **Docker** agar cocok untuk kebutuhan vibecoder maupun handoff agency.

| Example | Runtime | Mode | Use case | Health check |
| --- | --- | --- | --- | --- |
| [`01-static-html`](./01-static-html) | Static HTML | non-Docker | landing page | `/` |
| [`02-next-hello`](./02-next-hello) | Next.js / React | non-Docker | app dasar | `/` |
| [`03-next-postgres`](./03-next-postgres) | Next.js / Postgres | Docker local | app database | `/` |
| [`04-wordpress-deploy`](./04-wordpress-deploy) | WordPress / MySQL | Docker | CMS | `/` |
| [`05-go-service`](./05-go-service) | Go | non-Docker | API service | `/health` |
| [`06-laravel-php`](./06-laravel-php) | Laravel / MySQL | Docker | PHP app | `/health` |
| [`07-rust-api`](./07-rust-api) | Rust / Axum | non-Docker | API service | `/health` |
| [`08-template-docker`](./08-template-docker) | FastAPI | Docker | Python API | `/health` |
| [`09-vite-react-dashboard`](./09-vite-react-dashboard) | Vite / React | non-Docker | agency dashboard | — |
| [`10-next-supabase-saas`](./10-next-supabase-saas) | Next.js / Supabase | non-Docker | SaaS | `/api/health` |
| [`11-laravel-filament-admin`](./11-laravel-filament-admin) | Laravel / Filament / MySQL | Docker | admin/CMS | `/health` |
| [`12-wordpress-woocommerce`](./12-wordpress-woocommerce) | WordPress / WooCommerce / MySQL | Docker | e-commerce | `/` |
| [`13-astro-content-site`](./13-astro-content-site) | Astro | non-Docker | content/SEO | — |
| [`14-fastapi-react-docker`](./14-fastapi-react-docker) | FastAPI / React | Docker | full-stack API | `/api/health` |
| [`15-waha-rest-docker`](./15-waha-rest-docker) | WAHA | Docker | WhatsApp REST gateway | platform dashboard |
| [`16-baileys-bot-docker`](./16-baileys-bot-docker) | Node.js / Baileys | Docker | WhatsApp custom bot | `/health` |

## Git dan keamanan

Satu `.gitignore` di root melindungi seluruh contoh: file `.env*` (kecuali template `*.example`), private key/certificate, dependency/build output, database lokal, log, serta state/sesi WhatsApp. `.gitignore` khusus proyek tetap dipertahankan agar contoh dapat dipindahkan secara mandiri.

Gunakan `.env.example` hanya sebagai template; jangan commit `.env`, token, kredensial produksi, atau sesi WhatsApp. Placeholder seperti `replace-this` dan kredensial Compose default hanya untuk lokal—selalu ganti dengan secret deployment. Untuk production, database harus managed/persisten, endpoint WhatsApp wajib berada di balik HTTPS dan autentikasi, dan penggunaan WhatsApp wajib mengikuti kebijakannya serta consent penerima.

Lihat [SECURITY.md](./SECURITY.md) untuk checklist sebelum push atau deploy.
