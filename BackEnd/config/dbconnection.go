package config

import (
	"errors"
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	_ "gorm.io/driver/mysql"
)

var (
	DB_USER,
	DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	SCHEMA_NAME string
)

func Connect() (*gorm.DB, error) {
	DB_USER = GetEnv("DB_USER","admin")
	DB_PASSWORD = GetEnv("DB_PASSWORD","P@ssword123")
	DB_HOST = GetEnv("DB_HOST","localhost")
	DB_PORT = GetEnv("DB_PORT","3306")
	SCHEMA_NAME = GetEnv("SCHEMA_NAME","db_employee?charset=utf8mb4&parseTime=True&loc=Local")
	conn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s",DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,SCHEMA_NAME)
	db, err := gorm.Open(mysql.Open(conn), &gorm.Config{})
	if err != nil {
		return nil, errors.New("Connection Failed to Open")
	}

	return db, nil
}
