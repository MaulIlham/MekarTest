package main

import (
	"MekarTest/controllers"
	"MekarTest/models"
	"MekarTest/modules"
	"log"
)

func main()  {
	db, err := modules.Connect()
	if err != nil {
		log.Println("Connection Failed!")
		panic("failed")
	}
	db.AutoMigrate(&models.User{})
	controllers.HandlerRequest()
}