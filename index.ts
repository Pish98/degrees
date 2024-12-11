import { Telegraf, Markup } from "telegraf"
import { message } from "telegraf/filters"

const token = process.env["TOKEN"];
const url = process.env["APP_URL"] || "https://pish98.github.io/degrees/";

const bot = new Telegraf(token)

bot.command("start", ctx => {
  ctx.reply("Open app",
    Markup.inlineKeyboard([
      Markup.button.webApp("Отправить сообщение", url),
    ])
  )
});

process.once('SIGINT', () => bot.stop("SIGINT"));
process.once('SIGTERM', () => bot.stop("SIGTERM"));

bot.launch();
