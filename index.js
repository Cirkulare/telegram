process.env.NTBA_FIX_319 = 1;
const TelegramBot = require ('node-telegram-bot-api');
const express = require ('express');
const bodyParser = require('body-parser');
const index = express();

const token = '1020374199:AAEoOgadAvtPE4BIIFbIi1aM6wFonrRhpYk';
const bot = new TelegramBot(token);
const chatId = -352778269;


  index.listen (3001, '127.0.0.1');
  index.use(express.static(__dirname + '/static'));
  index.get('/', function(req, res){
  res.sendfile(__dirname + '/static/index.html');
  });

  index.use(bodyParser.json());

  index.post('/submit', (req, res) => {
    res.send("Great we made it");
  bot.sendMessage(chatId, `Імя: ${req.body['User name']}\nФамілія: ${req.body['User last name']}\nТелефон: ${req.body['User phone']}\nE-mail:${req.body['E Mail']}`);
  });


