package bot

import (
	"psb_bot/api"
	"psb_bot/bot/state"
	"psb_bot/database"
	"psb_bot/utils"
	"strconv"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

func stateNewHandler(user *database.User, msg tgbotapi.MessageConfig) {
	msg.ReplyMarkup = beginKeyboard
	msg.Text = "Нажмите на кнопку \"Начать\", чтобы начать общение с ботом."
	BotCore.Bot.Send(msg)
	user.UpdateChatState(state.ChatStateMenu)
}

func stateMenuHandler(update *tgbotapi.Update, user *database.User, msg tgbotapi.MessageConfig) {
	msg.ReplyMarkup = mainKeyboard
	msg.Text = BotCore.GetPhrase("start")

	switch update.Message.Text {
	case "Подобрать кредитный план":
		user.UpdateChatState(state.ChatStateCredit)
		msg.Text = BotCore.GetPhrase("credit")
		msg.ReplyMarkup = creditAlertKeyboard
	case "О боте":
		user.UpdateChatState(state.ChatStateAbout)
		msg.Text = BotCore.GetPhrase("info")
		msg.ReplyMarkup = backKeyboard
	case "Сайт":
		user.UpdateChatState(state.ChatStateWebpage)
		msg.Text = BotCore.GetPhrase("webpage")
		msg.ReplyMarkup = backKeyboard
	}

	BotCore.Bot.Send(msg)
}

func stateCreditHandler(update *tgbotapi.Update, user *database.User, msg tgbotapi.MessageConfig) {
	msg.ReplyMarkup = creditAlertKeyboard
	msg.Text = BotCore.GetPhrase("credit")
	switch update.Message.Text {
	case "Назад":
		user.UpdateChatState(state.ChatStateMenu)
		msg.Text = BotCore.GetPhrase("start")
		msg.ReplyMarkup = mainKeyboard
	case "Продолжить":
		user.UpdateChatState(state.ChatStateUserName)
		msg.Text = BotCore.GetPhrase("creditUserName")
		msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	}
	BotCore.Bot.Send(msg)
}

func stateCreditUserNameHandler(user *database.User, msg tgbotapi.MessageConfig) {
	user.SetUserName(msg.Text)
	user.UpdateChatState(state.ChatStateUserPhone)
	msg.Text = BotCore.GetPhrase("creditUserPhone")
	msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	BotCore.Bot.Send(msg)
}

func stateCreditUserPhoneHandler(user *database.User, msg tgbotapi.MessageConfig) {
	if !utils.ValidatePhone(msg.Text) {
		msg.Text = "Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX"
	} else {
		user.SetUserPhone(msg.Text)
		user.UpdateChatState(state.ChatStateUserAge)
		msg.Text = BotCore.GetPhrase("creditUserAge")
		msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	}
	BotCore.Bot.Send(msg)
}

func stateUserAgeHandler(user *database.User, msg tgbotapi.MessageConfig) {
	intValue, err := strconv.Atoi(msg.Text)
	if err != nil {
		msg.Text = "Пожалуйста, введите целое число лет"
	} else {
		user.SetUserAge(intValue)
		user.UpdateChatState(state.ChatStateUserRegion)
		msg.Text = BotCore.GetPhrase("creditUserRegion")
		msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	}
	user.SetUserAge(intValue)
	user.UpdateChatState(state.ChatStateUserRegion)
	BotCore.Bot.Send(msg)
}

func stateUserRegionHandler(user *database.User, msg tgbotapi.MessageConfig) {
	user.SetUserRegion(msg.Text)

	user.UpdateChatState(state.ChatStateUserFamilyStatus)
	msg.Text = BotCore.GetPhrase("creditUserFamily")
	msg.ReplyMarkup = familyStatusKeyboard
	BotCore.Bot.Send(msg)
}

func stateUserFamilyStatusHandler(user *database.User, msg tgbotapi.MessageConfig) {
	user.SetUserFamilyStatus(utils.StringToFamilyStatus(msg.Text))

	user.UpdateChatState(state.ChatStateLoanAmount)
	msg.Text = BotCore.GetPhrase("creditLoanAmount")
	msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	BotCore.Bot.Send(msg)
}

func stateLoanAmountHandler(user *database.User, msg tgbotapi.MessageConfig) {
	intValue, err := strconv.Atoi(msg.Text)
	if err != nil {
		msg.Text = "Введите целое число"
	} else {
		user.SetUserLoanAmount(intValue)
		user.UpdateChatState(state.ChatStateLoanTerm)
		msg.Text = BotCore.GetPhrase("creditLoanTerm")
		msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	}
	BotCore.Bot.Send(msg)
}

func stateLoanTermHandler(user *database.User, msg tgbotapi.MessageConfig) {
	intValue, err := strconv.Atoi(msg.Text)
	if err != nil {
		msg.Text = "Введите целое число"
	} else {
		user.SetUserLoanTerm(intValue)
		user.UpdateChatState(state.ChatStateLoanTarget)
		msg.Text = BotCore.GetPhrase("creditLoanTarget")
		msg.ReplyMarkup = creditTargetKeyboard
	}
	BotCore.Bot.Send(msg)
}

func stateLoanTargetHandler(update *tgbotapi.Update, user *database.User, msg tgbotapi.MessageConfig) {
	user.SetUserTarget(utils.StringToTarget(update.Message.Text))

	msg.Text = BotCore.GetPhrase("creditLoanTarget")
	msg.ReplyMarkup = creditTargetKeyboard

	user.UpdateChatState(state.ChatStateLoanProvision)

	msg.ReplyMarkup = provisionKeyboard
	msg.Text = BotCore.GetPhrase("creditLoanProvision")
	BotCore.Bot.Send(msg)
}

func stateLoanProvisionHandler(user *database.User, msg tgbotapi.MessageConfig) {
	user.SetLoanProvision(utils.StringToProvision(msg.Text))

	user.UpdateChatState(state.ChatStateUserSalary)

	msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	msg.Text = BotCore.GetPhrase("creditUserSelary")
	BotCore.Bot.Send(msg)
}

func stateUserSalaryHandler(user *database.User, msg tgbotapi.MessageConfig) {
	intValue, err := strconv.Atoi(msg.Text)
	if err != nil {
		msg.Text = "Число должно быть целым"
	} else {
		user.SetUserSalary(intValue)
		user.UpdateChatState(state.ChatStateUserExperience)
		msg.Text = BotCore.GetPhrase("creditUserExperience")
		msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	}
	BotCore.Bot.Send(msg)
}

func stateUserExperienceHandler(user *database.User, msg tgbotapi.MessageConfig) {
	intValue, err := strconv.Atoi(msg.Text)
	if err != nil {
		msg.Text = "Введите целое число лет"
	} else {
		user.SetUserExperience(intValue)
		user.UpdateChatState(state.ChatStateUserINN)
		msg.Text = BotCore.GetPhrase("creditUserINN")
		msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	}
	BotCore.Bot.Send(msg)
}

func stateUserINNHandler(user *database.User, msg tgbotapi.MessageConfig) {
	user.SetUserINN(msg.Text)

	user.UpdateChatState(state.ChatStateUserPSBRole)
	msg.Text = BotCore.GetPhrase("creditUserPSBRole")
	msg.ReplyMarkup = bankProductKeyboard
	BotCore.Bot.Send(msg)
}

func stateUserPSBRoleHandler(user *database.User, msg tgbotapi.MessageConfig) {
	user.SetPBSProduct(utils.StringToPBSProduct(msg.Text))

	user.UpdateChatState(state.ChatStateResult)
	msg.Text = BotCore.GetPhrase("creditResult")
	list := api.GetUserPlans(user)
	for _, plan := range list {
		user.AddPlanId(plan.Id)
		msg.ParseMode = tgbotapi.ModeHTML
		msg.Text = utils.PlanToText(plan)
		BotCore.Bot.Send(msg)
	}
	msg.ReplyMarkup = finalKeyboard
	msg.Text = "Чтобы выбрать заинтересовавший вас план, введите его номер."
	BotCore.Bot.Send(msg)

}

func stateResultHandler(update *tgbotapi.Update, user *database.User, msg tgbotapi.MessageConfig) {
	switch update.Message.Text {
	case "Вернуться в главное меню":
		user.UpdateChatState(state.ChatStateMenu)
		msg.Text = BotCore.GetPhrase("start")
		msg.ReplyMarkup = mainKeyboard
		user.ClearPlans()
		goto SEND
	default:
		intValue, err := strconv.Atoi(update.Message.Text)
		if err != nil {
			goto ERROR
		}
		if database.Contains(user.Plans, int64(intValue)) {
			msg.Text = "ССЫЛКА НА САЙТ"
			msg.ReplyMarkup = finalKeyboard
			goto SEND
		}
		msg.Text = "План с таким номером не найден"
		goto SEND
	}
ERROR:
	msg.ReplyMarkup = finalKeyboard
	msg.Text = BotCore.GetPhrase("unknown")
SEND:
	BotCore.Bot.Send(msg)
}
