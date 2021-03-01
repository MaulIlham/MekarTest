package services

import (
	"MekarTest/models"
	"MekarTest/repository"
	uuid "github.com/satori/go.uuid"
	"time"
)

func GetAllUsers() ([]*models.User, error) {
	users, err := repository.FindAll()
	if err != nil {
		return nil, err
	}

	return users, nil
	}

func GetUserById(id string) (*models.User, error) {
	user, err := repository.FindById(id)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func InsertDataUser(user models.User) (*models.User, error) {
	user.CreateAt = time.Now().In(time.UTC)
	user.UpdateAt = time.Now().In(time.UTC)
	user.Id = uuid.NewV4()
	err := user.Validate()
	if err != nil {
		return nil, err
	}
	newUser, err := repository.Save(user)
	if err != nil {
		return nil, err
	}

	return newUser, nil
}

func UpdateDataUser(user models.User) (*models.User, error) {
	user.UpdateAt = time.Now().In(time.UTC)
	err := repository.Update(user)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func DeleteDataUser(id string) error {
	err := repository.Delete(id)
	if err != nil {
		return err
	}

	return nil
}