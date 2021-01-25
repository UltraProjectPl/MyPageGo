package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"net/http"
)

type Message struct {
	gorm.Model
	Message string
}

var db, _ = gorm.Open(mysql.Open("user:pass@tcp(127.0.0.1:3306)/mypage?charset=utf8&parseTime=True"), &gorm.Config{})

func getMessages(w http.ResponseWriter, r *http.Request)  {
	var m []Message
	db.Find(&m)
	json.NewEncoder(w).Encode(&m)
}

func sendMessage(w http.ResponseWriter, r *http.Request)  {
	var m Message
	json.NewDecoder(r.Body).Decode(&m)
	db.Create(&m)
}

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.HandleFunc("/messages", getMessages).Methods("GET")
	r.HandleFunc("/message", sendMessage).Methods("POST")

	log.Fatal(http.ListenAndServe(":8080", r))
}