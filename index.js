
process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '1020374199:AAEoOgadAvtPE4BIIFbIi1aM6wFonrRhpYk';
const bot = new TelegramBot(token, {polling: true});
const chatId = -383644200;
  bot.sendMessage(chatId, "some text");
