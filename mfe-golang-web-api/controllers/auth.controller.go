package controllers

import (
	"context"
	"mfe-golang-web-api/configs"
	"mfe-golang-web-api/models"
	"mfe-golang-web-api/responses"
	"net/http"
	"time"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

const userkey = "user"

var authCollection *mongo.Collection = configs.GetCollection(configs.DB, "users")
var validateAuth = validator.New()

func Register() gin.HandlerFunc {

	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		var user models.Register
		defer cancel()

		//validate the request body
		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: map[string]interface{}{"data": err.Error()}})
			return
		}

		//use the validator library to validate required fields
		if validationErr := validate.Struct(&user); validationErr != nil {
			c.JSON(http.StatusBadRequest, responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: map[string]interface{}{"data": validationErr.Error()}})
			return
		}

		newUser := models.Register{
			Id:       primitive.NewObjectID(),
			Name:     user.Name,
			Email:    user.Email,
			Password: user.Password,
		}

		result, err := userCollection.InsertOne(ctx, newUser)
		if err != nil {
			c.JSON(http.StatusInternalServerError, responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: map[string]interface{}{"data": err.Error()}})
			return
		}

		c.JSON(http.StatusCreated, responses.UserResponse{Status: http.StatusCreated, Message: "success", Data: map[string]interface{}{"data": result}})
	}

}

func Login() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		var user models.Login
		defer cancel()

		//validate the request body
		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: map[string]interface{}{"data": err.Error()}})
			return
		}

		//use the validator library to validate required fields
		if validationErr := validate.Struct(&user); validationErr != nil {
			c.JSON(http.StatusBadRequest, responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: map[string]interface{}{"data": validationErr.Error()}})
			return
		}

		loginUser := models.Login{
			Email:    user.Email,
			Password: user.Password,
		}

		err := userCollection.FindOne(ctx, bson.M{"email": loginUser.Email, "password": loginUser.Password}).Decode(&user)
		if err != nil {
			c.JSON(http.StatusInternalServerError, responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: map[string]interface{}{"data": err.Error()}})
			return
		}

		session.Set(userkey, user.Email)
		if serr := session.Save(); serr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
			return
		}
		c.JSON(http.StatusOK, responses.UserResponse{
			Status:  http.StatusOK,
			Message: "Successfully authenticated user",
			Data:    map[string]interface{}{"data": session.Get(userkey)},
		})
		// c.JSON(http.StatusOK, responses.UserResponse{Status: http.StatusOK, Message: "success", Data: nil})
	}
}

func Logout() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		// ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		// defer cancel()

		user := session.Get(userkey)
		if user == nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid session token"})
			return
		}
		session.Delete(userkey)
		if err := session.Save(); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
	}
}
