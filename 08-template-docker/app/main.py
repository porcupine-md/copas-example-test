import os

from fastapi import FastAPI

app = FastAPI(title="Copas FastAPI Docker template")


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "Hello from FastAPI", "example": "08-template-docker"}


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", "8000")))
