package models

import (
	validation "github.com/go-ozzo/ozzo-validation"
	uuid "github.com/satori/go.uuid"
	_ "gorm.io/gorm"
	"time"
)

type User struct {
	Id 				uuid.UUID	`json:"id" gorm:"id"`
	Name			string		`json:"name" gorm:"name"`
	BirthDate 		string		`json:"birth_date" gorm:"birth_date"`
	IdentityNumber	string		`json:"identity_number" gorm:"identity_number"`
	Profession		string		`json:"profession" gorm:"profession"`
	Education		string		`json:"education" gorm:"education"`
	CreateAt		time.Time	`json:"create_at" gorm:"createAt"`
	UpdateAt		time.Time	`json:"update_at" gorm:"updateAt"`
}

func (u User) Validate() error {
	return validation.ValidateStruct(&u,
		validation.Field(&u.Name, validation.Required.Error("Field Name can't be empty")),
		validation.Field(&u.IdentityNumber, validation.Required.Error("Field Identity Number can't be empty")),
		validation.Field(&u.IdentityNumber, validation.Length(15,20).Error("length field Identity Number can't less than 15")),
	)
}