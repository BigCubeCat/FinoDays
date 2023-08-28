package bot

import (
	"log"
	"psb_bot/bot/state"
	"psb_bot/database"
	"psb_bot/utils"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
	"github.com/magiconair/properties"
)

type Core struct {
	Bot     *tgbotapi.BotAPI
	Phrases *properties.Properties
}

var BotCore *Core

func Init(token string, debug bool) {
	Bot, err := tgbotapi.NewBotAPI(token)
	if err != nil {
		log.Fatal(err)
	}

	Bot.Debug = debug
	BotCore = new(Core)
	BotCore.Bot = Bot
	BotCore.Phrases = properties.MustLoadFile("./config/bot_text.properties", properties.UTF8)
	log.Printf("Logging in as %s", Bot.Self.UserName)
}

func (core *Core) Run() {
	updateConfig := tgbotapi.NewUpdate(0)
	updateConfig.Timeout = 60

	updates := core.Bot.GetUpdatesChan(updateConfig)
	for update := range updates {
		if update.Message == nil {
			continue
		}

		user := utils.GetUserByID(update.Message.From.ID)
		msg := tgbotapi.NewMessage(update.Message.Chat.ID, update.Message.Text)

		handleState(user, &update, msg)
	}
}

func handleState(user *database.User, update *tgbotapi.Update, msg tgbotapi.MessageConfig) {
	switch user.ChatState {
	case state.ChatStateNew:
		stateNewHandler(user, msg)
	case state.ChatStateMenu:
		stateMenuHandler(update, user, msg)
	case state.ChatStateCredit:
		stateCreditHandler(update, user, msg)
	case state.ChatStateUserName:
		stateCreditUserNameHandler(user, msg)
	case state.ChatStateUserPhone:
		stateCreditUserPhoneHandler(user, msg)
	case state.ChatStateUserRegion:
		stateUserRegionHandler(user, msg)
	case state.ChatStateUserFamilyStatus:
		stateUserFamilyStatusHandler(user, msg)
	case state.ChatStateLoanAmount:
		stateLoanAmountHandler(user, msg)
	case state.ChatStateLoanTerm:
		stateLoanTermHandler(user, msg)
	case state.ChatStateLoanTarget:
		stateLoanTargetHandler(update, user, msg)
	case state.ChatStateUserSalary:
		stateUserSalaryHandler(user, msg)
	case state.ChatStateUserCreditCount:
		stateUserCreditCountHandler(user, msg)
	case state.ChatStateUserINN:
		stateUserINNHandler(user, msg)
	case state.ChatStateUserPSBRole:
		stateUserPSBRoleHandler(user, msg)
	case state.ChatStateAbout, state.ChatStateWebpage:
		handleAboutAndSupportState(user, update, msg)
	case state.ChatStateResult:
		stateResultHandler(update, user, msg)
	}
}

func handleAboutAndSupportState(user *database.User, update *tgbotapi.Update, msg tgbotapi.MessageConfig) {
	if update.Message.Text == "Назад" {
		user.UpdateChatState(state.ChatStateMenu)
		msg.Text = BotCore.GetPhrase("start")
		msg.ReplyMarkup = mainKeyboard
	} else {
		msg.Text = BotCore.GetPhrase("unknown")
		msg.ReplyMarkup = backKeyboard
	}
	BotCore.Bot.Send(msg)
}

func (c *Core) GetPhrase(key string) string {
	return c.Phrases.MustGetString(key)
}
