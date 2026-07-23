# Copas deployment examples — design

## Purpose

Provide sixteen independent, minimal projects to validate Copas static-site, framework, database-backed, compiled-service, Dockerfile, Docker Compose, and WhatsApp integration deployment paths. The intended user is a developer testing `copas up`. Each project has a small deploy-oriented surface and a README with local run, go-live, and verification steps.

## Example matrix

- `01-static-html`: no-build static deployment.
- `02-next-hello`: Next.js / React deployment.
- `03-next-postgres`: Next.js plus PostgreSQL with a dummy-data seed.
- `04-wordpress-deploy`: standard WordPress and MySQL setup. WordPress creates its configuration from environment variables, and the first browser visit completes the ordinary installation wizard.
- `05-go-service`: dependency-free Go HTTP service.
- `06-laravel-php`: Laravel and MySQL, with migrations and idempotent seed data at startup.
- `07-rust-api`: Axum API with root and health endpoints.
- `08-template-docker`: FastAPI service whose Dockerfile explicitly starts Uvicorn as PID 1.
- `09`–`13`: Vite, Supabase, Filament, WooCommerce, and Astro deployment paths.
- `14-fastapi-react-docker`: FastAPI API and React/Nginx frontend with Compose routing.
- `15`–`16`: WAHA and a custom Baileys WhatsApp service, with local-only ports and persisted session state.

## Database model

The WordPress and Laravel projects use Docker Compose for local MySQL. Each production README requires provisioning a MySQL-compatible managed service before deployment, injecting its credentials as secrets, and keeping application deployment serially after database readiness. WordPress also requires a persistent mount for `wp-content` so user uploads and installed extensions survive redeploys.

## Validation

All networked services bind to `0.0.0.0` and read `PORT` where their runtime supports it. Every Dockerfile has an explicit long-running server command: Apache foreground for WordPress, `php artisan serve` for Laravel, Uvicorn for FastAPI, Nginx foreground for the React frontend, and Node for Baileys. `05`, `06`, `07`, `08`, and `16` expose `/health`; `14` exposes `/api/health`; `01` through `04` and `12` can be checked at `/`. Validation includes native Go tests, Rust compilation with a current toolchain, Compose configuration checks, Docker builds, and HTTP probes for independently runnable Docker APIs.
