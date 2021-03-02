package controllers

import (
	"MekarTest/models"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
)

func LoginHandler(c *gin.Context)  {
	var user models.Account
	err := c.BindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Can't bind struct",
		})
	}
	if user.Username != "admin" {
		c.JSON(http.StatusUnauthorized,gin.H{
			"message": "Wrong Username or Password",
		})
	}else {
		if user.Password != "admin" {
			c.JSON(http.StatusUnauthorized,gin.H{
				"message": "Wrong Username or Password",
			})
		}
	}
	sign := jwt.New(jwt.GetSigningMethod("HS256"))
	token, err := sign.SignedString([]byte("secret"))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		c.Abort()
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Login Success",
		"token": token,
	})
}

func Auth(c *gin.Context)  {
	tokenString := c.Request.Header.Get("Authorization")
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if jwt.GetSigningMethod("HS256") != token.Method {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte("secret"), nil
	})

	if token != nil && err == nil {
		fmt.Println("Token Verified")
	}else {
		result := gin.H{
			"message": "Not Authorized",
			"error": err.Error(),
		}
		c.JSON(http.StatusUnauthorized, result)
		c.Abort()
	}
}
