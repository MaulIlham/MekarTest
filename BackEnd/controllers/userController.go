package controllers

import (
	"MekarTest/models"
	"MekarTest/services"
	"github.com/gin-gonic/gin"
)

func GetAllDataUser(c *gin.Context)  {
	users, err := services.GetAllUsers()
	if err != nil {
		return
	}

	susscessResponse := models.Response{Status: 200, Message: "Success", Data: users}
	c.JSON(200,susscessResponse)
}

func GetDataUserById(c *gin.Context)  {
	id := c.Param("id")
	user, err := services.GetUserById(id)
	if err != nil {
		return
	}

	susscessResponse := models.Response{Status: 200, Message: "Success", Data: user}
	c.JSON(200, susscessResponse)
}

func SaveDataUser(c *gin.Context)  {
	var user models.User
	c.BindJSON(&user)
	res, err := services.InsertDataUser(user)
	if err != nil {
		susscessResponse := models.Response{Status: 500, Message: err.Error(), Data: nil}
		c.JSON(500, susscessResponse)
		return
	}else {
		susscessResponse := models.Response{Status: 200, Message: "Success", Data: res}
		c.JSON(200, susscessResponse)
	}


}

func UpdateDataUser(c *gin.Context)  {
	var user models.User
	c.BindJSON(&user)
	res, err := services.UpdateDataUser(user)
	if err != nil {
		susscessResponse := models.Response{Status: 500, Message: "Update Failed", Data: nil}
		c.JSON(500, susscessResponse)
		return
	}else {
		susscessResponse := models.Response{Status: 200, Message: "Success", Data: res}
		c.JSON(200, susscessResponse)
	}
}

func DeleteDataUser(c *gin.Context)  {
	id := c.Param("id")
	err := services.DeleteDataUser(id)
	if err != nil {
		return
	}

	susscessResponse := models.Response{Status: 200, Message: "Success", Data: nil}
	c.JSON(200, susscessResponse)
}