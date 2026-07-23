package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

type response struct {
	Message string `json:"message"`
	Example string `json:"example"`
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	log.Printf("listening on 0.0.0.0:%s", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, newServer()))
}

func newServer() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, response{Message: "Hello from Go", Example: "05-go-service"})
	})
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
	})
	return mux
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}
