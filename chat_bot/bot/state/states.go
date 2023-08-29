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
	ChatStateUserRegion
	ChatStateUserFamilyStatus
	// Credit preference
	ChatStateLoanAmount
	ChatStateLoanTerm
	ChatStateLoanTarget
	// Material income and etc.
	ChatStateUserSalary
	ChatStateUserCreditCount
	ChatStateUserINN

	ChatStateUserPSBRole

	ChatStateResult
)
