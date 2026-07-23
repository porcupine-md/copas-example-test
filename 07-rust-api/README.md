# 07 — Rust API

API Axum minimal dengan respons JSON pada `/` dan endpoint pemeriksaan kesehatan pada `/health`.

## Jalankan lokal

Gunakan Rust toolchain modern (Axum 0.8) lalu:

```bash
cargo run
```

Secara default server bind ke `0.0.0.0:3000`. Ubah dengan `PORT` bila diperlukan.

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

## Deploy

Deploy folder ini sebagai Rust app. `Cargo.toml` menjadi marker build, dan aplikasi membaca `PORT` dari environment deployment.

```bash
copas up --project <project> --name rust-health-api --path . --port 3000
```

Verifikasi URL publik pada `/health`.
