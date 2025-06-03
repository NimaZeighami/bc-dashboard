package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB() *gorm.DB {

	adminUser := os.Getenv("ADMIN_DATABASE_USER")
	adminPass := os.Getenv("ADMIN_DATABASE_PASS")
	adminHost := os.Getenv("ADMIN_DATABASE_HOST")
	adminPort := os.Getenv("ADMIN_DATABASE_PORT")
	adminDBName := "postgres" 
	targetDB := os.Getenv("DB_NAME")
	if targetDB == "" {
		targetDB = "bc_platform" 
	}

	
	adminDSN := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable",
		adminUser, adminPass, adminHost, adminPort, adminDBName)

	adminDB, err := sql.Open("postgres", adminDSN)
	if err != nil {
		log.Fatalf("❌ Cannot connect to admin DB: %v", err)
	}
	defer adminDB.Close()

	var exists bool
	err = adminDB.QueryRow("SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = $1)", targetDB).Scan(&exists)
	if err != nil {
		log.Fatalf("❌ Failed to check if DB exists: %v", err)
	}

	if !exists {
		_, err = adminDB.Exec("CREATE DATABASE " + targetDB)
		if err != nil {
			log.Fatalf("❌ Failed to create DB: %v", err)
		}
		log.Println("✅ Database created:", targetDB)
	} else {
		log.Println("✅ Database already exists:", targetDB)
	}

	// user := os.Getenv("DATABASE_USER")
	pass := os.Getenv("DATABASE_PASSWORD")
	host := os.Getenv("DATABASE_HOST")
	port := os.Getenv("DATABASE_PORT")
	appDSN := fmt.Sprintf("postgres://postgres:%s@%s:%s/%s?sslmode=disable",
	 pass, host, port, targetDB)

	db, err := gorm.Open(postgres.Open(appDSN), &gorm.Config{})
	if err != nil {
		log.Fatalf("❌ Failed to connect to final DB (%s): %v", targetDB, err)
	}

	log.Println("🔗 Connected to DB:", targetDB)
	return db
}
