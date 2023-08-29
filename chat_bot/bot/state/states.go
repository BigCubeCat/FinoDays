package state

type ChatState int8

const (
	// Main navigation
	ChatStateNew ChatState = iota
	ChatStateMenu
	ChatStateAbout
	ChatStateWebpage
	// User data
	ChatStateCredit
	ChatStateUserName
	ChatStateUserPhone
	ChatStateUserAge
	ChatStateUserRegion
	ChatStateUserFamilyStatus
	// Credit preference
	ChatStateLoanAmount
	ChatStateLoanTerm
	ChatStateLoanTarget
	ChatStateLoanProvision
	// Material income and etc.
	ChatStateUserSalary
	ChatStateUserExperience
	ChatStateUserINN

	ChatStateUserPSBRole

	ChatStateResult
)
