package models

import (
	"time"
	_ "gorm.io/gorm"
)

type User struct {
	Id 				string		`json:"id" gorm:"id" validate:"required"`
	Name			string		`json:"name" gorm:"name" validate:"required`
	BirthDate 		string		`json:"birth_date" gorm:"birth_date"`
	IdentityNumber	string		`json:"identity_number" gorm:"identity_number" validate:"required`
	Profession		string		`json:"profession" gorm:"profession"`
	Education		string		`json:"education" gorm:"education"`
	CreateAt		time.Time	`json:"create_at" gorm:"createAt"`
	UpdateAt		time.Time	`json:"update_at" gorm:"updateAt"`
}
