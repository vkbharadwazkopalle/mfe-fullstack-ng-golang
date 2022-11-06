package main

import (
	"fmt"
	"mfe-golang-web-api/configs"
	"mfe-golang-web-api/routes"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
)

var secret = []byte("secret")

func main() {

	router := gin.Default()

	router.Use(sessions.Sessions("mysession", sessions.NewCookieStore(secret)))

	//run database
	configs.ConnectDB()

	//routes
	routes.UserRoute(router)
	routes.AuthRoute(router)

	router.Run("localhost:6000")

	fmt.Println("Hello, World!")
}
