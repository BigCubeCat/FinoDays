package bot

import (
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

var beginKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Начать"),
	),
)

var mainKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Подобрать кредитный план"),
	),
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("О боте"),
		tgbotapi.NewKeyboardButton("Сайт"),
	),
)

var backKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Назад"),
	),
)

var creditAlertKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Назад"),
		tgbotapi.NewKeyboardButton("Продолжить"),
	),
)

var creditTargetKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Покупка недвижимости"),
		tgbotapi.NewKeyboardButton("Покупка автомобиля"),
		tgbotapi.NewKeyboardButton("Оплата образования"),
	),
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Ремонт"),
		tgbotapi.NewKeyboardButton("Развитие бизнеса"),
		tgbotapi.NewKeyboardButton("Рефинансирование"),
	),
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Путешествие"),
		tgbotapi.NewKeyboardButton("Лечение"),
		tgbotapi.NewKeyboardButton("Другое"),
	),
)

var finalKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Вернуться в главное меню"),
	),
)

var bankProductKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Зарплатная карта ПСБ"),
		tgbotapi.NewKeyboardButton("Кредитная карта ПСБ"),
		tgbotapi.NewKeyboardButton("Вклад ПСБ"),
	),
)

var familyStatusKeyboard = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("В браке"),
		tgbotapi.NewKeyboardButton("Не в браке"),
	),
)