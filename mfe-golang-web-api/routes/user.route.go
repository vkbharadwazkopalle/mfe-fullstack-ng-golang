package routes

import (
	"mfe-golang-web-api/controllers"
	"net/http"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {

	private := router.Group("/")
	private.Use(AuthRequired)
	{
		private.POST("/user", controllers.CreateUser())
		private.GET("/user/:userId", controllers.GetUser())
		private.PUT("/user/:userId", controllers.EditUser())
		private.DELETE("/user/:userId", controllers.DeleteUser())
		private.GET("/users", controllers.GetAllUsers())
	}

}

func AuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")
	if user == nil {
		// Abort the request with the appropriate error code
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}
	// Continue down the chain to handler etc
	c.Next()
}
