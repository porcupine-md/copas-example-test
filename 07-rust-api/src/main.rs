use axum::{routing::get, Json, Router};
use std::{collections::BTreeMap, env};

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(hello))
        .route("/health", get(health));

    let port = env::var("PORT").unwrap_or_else(|_| "3000".to_owned());
    let address = format!("0.0.0.0:{port}");
    let listener = tokio::net::TcpListener::bind(&address)
        .await
        .expect("could not bind HTTP listener");

    println!("listening on {address}");
    axum::serve(listener, app)
        .await
        .expect("HTTP server stopped unexpectedly");
}

async fn hello() -> Json<BTreeMap<&'static str, &'static str>> {
    Json(BTreeMap::from([
        ("example", "07-rust-api"),
        ("message", "Hello from Rust"),
    ]))
}

async fn health() -> Json<BTreeMap<&'static str, &'static str>> {
    Json(BTreeMap::from([("status", "ok")]))
}
