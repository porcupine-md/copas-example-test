from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Brief API")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:8083"], allow_methods=["*"], allow_headers=["*"])

@app.get("/api/health")
def health(): return {"status": "ok"}

@app.get("/api/brief")
def brief(): return {"name": "Nova Studio", "message": "Your API is talking to React."}
