package main

import (
	"os"
	"psb_bot/bot"
	"psb_bot/database"
)



func main() {
	ok := database.Init();
	if !ok {
		panic("Failed to init database")
	}
	bot.Init(os.Getenv("TELEGRAM_BOT_TOKEN"), false)
	bot.BotCore.Run();
}
