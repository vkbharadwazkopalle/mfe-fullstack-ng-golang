package routes

import (
	"mfe-golang-web-api/controllers"

	"github.com/gin-gonic/gin"
)

func AuthRoute(router *gin.Engine) {

	router.POST("/register", controllers.Register())
	router.GET("/login", controllers.Login())
	router.GET("/logout", controllers.Logout())

}
