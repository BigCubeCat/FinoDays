package database

import (
	"psb_bot/bot/state"
)

type LoanTarger string

const (
	None       LoanTarger = "another"
	Car        LoanTarger = "car"
	RealEstate LoanTarger = "estate"
	Business   LoanTarger = "business"
	Renovation LoanTarger = "renovation"
	Education  LoanTarger = "education"
	Refinance  LoanTarger = "refinance"
	Traveling  LoanTarger = "traveling"
	Treatment  LoanTarger = "treatment"
)

type PBSProduct string

const (
	SalaryCard PBSProduct = "salary card"
	CreditCard PBSProduct = "credit card"
	Deposite   PBSProduct = "deposite"
)

type FamilyStatus string

const (
	Married   FamilyStatus = "married"
	Unmarried FamilyStatus = "single"
)

type Provision string

// 'none' | 'flat' | 'house' | 'land' | 'car';
const (
	NoneP  Provision = "none"
	FlatP  Provision = "flat"
	HouseP Provision = "house"
	LandP  Provision = "land"
	CarP   Provision = "car"
)

type User struct {
	ID           int64 `gorm:"primary_key"`
	Name         string
	Age          int
	Phone        string
	INN          string
	Region       string
	Salary       int
	LoanTerm     int
	LoanAmount   int
	Experience   int
	Provision    Provision
	FamilyStatus FamilyStatus
	Target       LoanTarger
	PBSProduct   PBSProduct
	ChatState    state.ChatState
}
