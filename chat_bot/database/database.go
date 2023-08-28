package database

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var Database *gorm.DB

func Init() bool {
	db, err := gorm.Open(sqlite.Open("chat.db"), &gorm.Config{})
	if err != nil {
		log.Panic(err)
		return false
	}
	db.AutoMigrate(&User{})
	Database = db
	return true
}
