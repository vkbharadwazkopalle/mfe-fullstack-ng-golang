package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id      primitive.ObjectID `json:"id,omitempty"`
	Name    string             `json:"name,omitempty" validate:"required"`
	Project primitive.ObjectID `json:"project,omitempty" validate:"required"`
	Title   string             `json:"title,omitempty" validate:"required"`
}
