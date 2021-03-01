package main

import (
	"MekarTest/controllers"
	"MekarTest/models"
	"MekarTest/config"
	"log"
)

func main()  {
	db, err := config.Connect()
	if err != nil {
		log.Println("Connection Failed!")
		panic("failed")
	}
	db.AutoMigrate(&models.User{})
	controllers.HandlerRequest()
}