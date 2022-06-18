package main

import (
	"fmt"
	"mfe-with-go-docker/configs"
	"mfe-with-go-docker/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	//run database
	configs.ConnectDB()

	//routes
	routes.UserRoute(router)

	router.Run("localhost:6000")

	fmt.Println("Hello, World!")
}
