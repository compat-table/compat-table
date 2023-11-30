package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

var uploadPath string

func readRequest(r *http.Request) (map[string]interface{}, error) {
	var err error
	buf := bytes.NewBuffer([]byte{})

	if _, err = io.Copy(buf, r.Body); err != nil {
		return nil, err
	}
	var data map[string]interface{}
	if err = json.Unmarshal(buf.Bytes(), &data); err != nil {
		return nil, err
	}
	if data, ok := data["esVersion"].(string); !ok || data == "" {
		return nil, fmt.Errorf("missing 'esVersion' key in uploaded data")
	}
	if data, ok := data["osVersion"]; !ok || data == "" {
		return nil, fmt.Errorf("missing 'osVersion' key in uploaded data")
	}
	if data, ok := data["playerVersion"]; !ok || data == "" {
		return nil, fmt.Errorf("missing 'playerVersion' key in uploaded data")
	}
	return data, nil
}

func writeFile(data map[string]interface{}) error {
	var filename string
	var err error
	for !os.IsNotExist(err) {
		filename = filepath.Join(uploadPath, fmt.Sprintf("%d.json", time.Now().UnixMilli()))
		_, err = os.Stat(filename)
	}
	fileBytes, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return err
	}
	file, err := os.OpenFile(filename, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, os.ModePerm)
	if err != nil {
		return err
	}
	defer file.Close()
	fileBytesReader := bytes.NewReader(fileBytes)
	if _, err = io.Copy(file, fileBytesReader); err != nil {
		return err
	}
	return nil
}

func handle(w http.ResponseWriter, r *http.Request) {
	var err error

	data, err := readRequest(r)
	if err != nil {
		log.Println("error receiving upload:", err)
		w.WriteHeader(400)
		return
	}

	log.Println("received data from:", data["osVersion"])

	if err = writeFile(data); err != nil {
		log.Println("error writing to file:", err)
		w.WriteHeader(500)
		return
	}

	log.Println("saved data from:", data["osVersion"])

	w.WriteHeader(200)
}

func main() {
	var err error

	host := flag.String("host", "127.0.0.1", "host the server will run on")
	port := flag.Int("port", 8080, "port the server will run on")
	staticPath := flag.String("staticpath", ".", "dir containing static files to serve")
	flag.StringVar(&uploadPath, "uploadpath", "./upload", "dir to store uploaded files")
	flag.Parse()

	if _, err = os.Stat(*staticPath); err != nil {
		log.Fatalln(err)
	}

	http.HandleFunc("/upload", handle)
	http.Handle("/", http.FileServer(http.Dir(*staticPath)))

	log.Println("starting scraper server on:", fmt.Sprintf("http://%s:%d", *host, *port))

	http.ListenAndServe(fmt.Sprintf("%s:%d", *host, *port), nil)
}
