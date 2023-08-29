package utils

import (
	"psb_bot/database"
	"regexp"
)

// StringToTarget maps a string to a database.LoanTarger.
//
// It takes a string as input and returns a database.LoanTarger.
func StringToTarget(str string) database.LoanTarger {
	switch str {
	case "Покупка недвижимости":
		return database.RealEstate
	case "Развитие бизнеса":
		return database.Business
	case "Покупка автомобиля":
		return database.Car
	case "Ремонт":
		return database.Renovation
	case "Оплата образования":
		return database.Education
	case "Рефинансирование":
		return database.Refinance
	case "Путешествие":
		return database.Traveling
	case "Лечение":
		return database.Treatment
	default:
		return database.None
	}
}

// ValidatePhone checks if a phone number is valid.
//
// It takes a phone number as a string and returns a boolean value indicating whether the phone number is valid or not.
func ValidatePhone(phone string) bool {
	matched, _ := regexp.MatchString(`\+7[0-9]{10}$`, phone)
	return matched
}

// StringToPBSProduct converts a string to a PBSProduct type.
//
// It takes a string as input and returns a database.PBSProduct type.
func StringToPBSProduct(str string) database.PBSProduct {
	switch str {
	case "Зарплатная карта ПСБ":
		return database.SalaryCard
	case "Вклад ПСБ":
		return database.Deposite
	default:
		return database.CreditCard
	}
}

func StringToFamilyStatus(str string) database.FamilyStatus {
	switch str {
	case "В браке":
		return database.Married
	default:
		return database.Unmarried
	}
}

// GetUserByID returns a pointer to a database.User based on the given ID.
//
// It takes an int64 parameter `id` representing the user ID.
// It returns a pointer to a database.User.
func GetUserByID(id int64) *database.User {
	user, ok := database.GetUser(id)
	if !ok {
		user = database.CreateUser(id)
	}
	return &user
}
