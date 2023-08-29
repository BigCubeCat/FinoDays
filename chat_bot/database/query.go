package database

import (
	"psb_bot/bot/state"
)

func GetUser(id int64) (User, bool) {
	var user User
	err := Database.First(&user, id).Error
	if err != nil {
		return User{}, false
	}
	return user, true
}

func CreateUser(id int64) User {
	user := User{
		ID:        id,
		ChatState: state.ChatStateNew,
	}
	Database.Create(&user)
	return user
}

func (user *User) UpdateChatState(chatState state.ChatState) {
	user.ChatState = chatState
	Database.Save(&user)
}

func (user *User) SetUserName(name string) {
	user.Name = name
	Database.Save(&user)
}

func (user *User) SetUserAge(age int) {
	user.Age = age
	Database.Save(&user)
}

func (user *User) SetUserExperience(experience int) {
	user.Experience = experience
	Database.Save(&user)
}

func (user *User) SetUserPhone(phone string) {
	user.Phone = phone
	Database.Save(&user)
}

func (user *User) SetUserLoanAmount(loanAmount int) {
	user.LoanAmount = loanAmount
	Database.Save(&user)
}

func (user *User) SetUserINN(inn string) {
	user.INN = inn
	Database.Save(&user)
}

func (user *User) SetUserSalary(selary int) {
	user.Salary = selary
	Database.Save(&user)
}

func (user *User) SetUserLoanTerm(loanTerm int) {
	user.LoanTerm = loanTerm
	Database.Save(&user)
}

func (user *User) SetUserTarget(target LoanTarger) {
	user.Target = target
	Database.Save(&user)
}

func (user *User) SetUserRegion(region string) {
	user.Region = region
	Database.Save(&user)
}

func (user *User) SetPBSProduct(product PBSProduct) {
	user.PBSProduct = product
	Database.Save(&user)
}
func (user *User) SetUsetINN(inn string) {
	user.INN = inn
	Database.Save(&user)
}

func (user *User) SetLoanProvision(provision Provision) {
	user.Provision = provision
	Database.Save(&user)
}

func (user *User) SetUserFamilyStatus(familyStatus FamilyStatus) {
	user.FamilyStatus = familyStatus
	Database.Save(&user)
}

func (user *User) AddPlanId(id int64) {
	if Contains(user.Plans, id) {
		return
	}
	user.Plans = append(user.Plans, id)
	Database.Save(&user)
}

func (user *User) ClearPlans() {
	user.Plans = []int64{}
	Database.Save(&user)
}

// contains checks if an element exists in a slice of int64.
//
// Parameters:
// - s: the slice to search in.
// - e: the element to search for.
//
// Returns:
// - bool: true if the element is found, false otherwise.
func Contains(s []int64, e int64) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}
