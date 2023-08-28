package database

import (
	"psb_bot/bot/state"
)

type LoanTarger string
const (
	None       LoanTarger = "Другое"
	Car        LoanTarger = "Покупка автомобиля"
	RealEstate LoanTarger = "Покупка недвижимости"
	Business   LoanTarger = "Развитие бизнеса"
	Renovation LoanTarger = "Ремонт"
	Education  LoanTarger = "Оплата образования"
	Refinance  LoanTarger = "Рефинансирование"
	Traveling  LoanTarger = "Путешествие"
	Treatment  LoanTarger = "Лечение"
)

type PBSProduct string
const (
	SalaryCard PBSProduct = "Зарплатная карта ПСБ"
	CreditCard PBSProduct = "Кредитная карта ПСБ"
	Deposite   PBSProduct = "Вклад ПСБ"
)

type FamilyStatus string
const (
	Married FamilyStatus = "В браке"
	Unmarried FamilyStatus = "Не в браке"
)
type User struct {
	ID           int64 `gorm:"primary_key"`
	Name         string
	Phone        string
	INN          string
	Region       string
	Salary       int
	LoanTerm     int
	CreditCount  int
	LoanAmount   int
	FamilyStatus FamilyStatus
	Target       LoanTarger
	PBSProduct   PBSProduct
	ChatState    state.ChatState
}
