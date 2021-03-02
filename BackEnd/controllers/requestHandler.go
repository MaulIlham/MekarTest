package controllers

import (
	"MekarTest/middleware"
	"github.com/gin-gonic/gin"
	"log"
)

func HandlerRequest()  {
	log.Println("Server Starting at http://localhost:8844")
	router := gin.Default()
	router.Use(middleware.CORSMiddleware())
	router.Use(gin.Logger())
	router.POST("/api/auth/signin",LoginHandler)
	router.GET("/api/user",GetAllDataUser)
	router.Use(Auth)
	router.GET("/api/user/:id",GetDataUserById)
	router.POST("/api/user",SaveDataUser)
	router.PUT("/api/user",UpdateDataUser)
	router.DELETE("/api/user/:id",DeleteDataUser)
	router.Run(":8844")
}
