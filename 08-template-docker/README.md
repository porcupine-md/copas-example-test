# 08 — FastAPI Docker template

Template Docker kecil untuk aplikasi FastAPI. Berbeda dari contoh runtime-detected, deployment ini selalu membangun `Dockerfile`.

## Jalankan lokal

```bash
docker build -t copas-fastapi-template .
docker run --rm -p 8000:8000 -e PORT=8000 copas-fastapi-template
```

Lalu buka <http://localhost:8000/docs> atau jalankan:

```bash
curl http://localhost:8000/
curl http://localhost:8000/health
```

## Deploy

Deploy dengan Dockerfile dan port `8000`:

```bash
copas up --project <project> --name fastapi-docker --path . --port 8000
```

Runtime command secara eksplisit menjalankan `exec uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}`. Jadi server menjadi proses utama container dan tidak keluar sebagai shell kosong; port platform tetap dapat dioverride tanpa mengubah source.
