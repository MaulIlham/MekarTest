package repository

import (
	"MekarTest/models"
	"MekarTest/modules"
)

func FindAll() ([]*models.User, error){
	conn, err := modules.Connect()
	if err != nil {
		return nil, err
	}
	data := []*models.User{}
	conn.Find(&data)

	return data, nil
}

func FindById(id string) (*models.User, error) {
	conn, err := modules.Connect()
	if err != nil {
		return nil, err
	}
	data := models.User{}
	conn.Where("id=?",id).Find(&data)

	return &data, nil
}

func Save(user models.User) (*models.User, error) {
	conn, err := modules.Connect()
	if err != nil {
		return nil, err
	}
	conn.Create(&user)

	return &user, nil
}

func Update(user models.User) error {
	conn, err := modules.Connect()
	if err != nil {
		return err
	}

	var newUser models.User
	conn.Where("id=?",user.Id).Find(&newUser)
	newUser = user
	return conn.Updates(&newUser).Error
}

func Delete(id string) error {
	conn, err := modules.Connect()
	if err != nil {
		return err
	}

	var user models.User
	conn.Where("id=?",id).Find(&user)
	return conn.Delete(&user).Error
}