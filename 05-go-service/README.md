# 05 — Go service

Service Go tanpa dependency eksternal untuk memeriksa deteksi runtime Go dan port deployment.

## Jalankan lokal

```bash
go test ./...
go run .
```

Server mendengarkan `0.0.0.0:3000` secara default. Ganti dengan environment `PORT` bila diperlukan.

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

## Deploy

Deploy direktori ini sebagai Go app. Copas/Railpack mendeteksi `go.mod` dan menjalankan binary pada port yang diberikan.

```bash
copas up --project <project> --name go-hello --path . --port 3000
```

Gunakan `/health` untuk health check publik.
