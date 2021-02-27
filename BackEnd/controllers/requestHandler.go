package controllers

import (
	"github.com/gin-gonic/gin"
	"log"
)

func HandlerRequest()  {
	log.Println("Server Starting at http://localhost:8844")
	router := gin.Default()
	router.Use(gin.Logger())
	router.GET("/api/user",GetAllDataUser)
	router.GET("/api/user/:id",GetDataUserById)
	router.POST("/api/user",SaveDataUser)
	router.PUT("/api/user",UpdateDataUser)
	router.DELETE("/api/user/:id",DeleteDataUser)
	router.Run(":8844")
}
