# Security checklist

This repository contains deployable examples, not production credentials.

Before committing or pushing:

1. Keep secrets only in untracked `.env` files or the deployment secret store. Commit templates as `.env.example` with placeholders only.
2. Do not commit private keys, certificates, local databases, build output, dependency folders, logs, or WhatsApp session/auth directories. The root `.gitignore` applies these rules to every example.
3. Inspect staged files with `git diff --cached --check` and `git status --ignored` before a release. If a secret was ever committed, rotate it; deleting the file in a later commit is not enough.
4. Replace every local Compose default password before exposing a service. Use managed persistent databases and HTTPS in production.
5. Keep WAHA and Baileys dashboards/API access authenticated and private. Never publish their session state.

## Docker runtime contract

A deployable Docker image must keep one foreground process alive, bind to `0.0.0.0`, and listen on the documented port. The Docker examples meet that contract with explicit commands or entrypoints. For FastAPI, Uvicorn is executed directly as the container process; a shell-only command would exit successfully and cause a restart loop.
