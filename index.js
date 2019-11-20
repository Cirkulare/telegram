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
index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json());
index.use(express.urlencoded({ extended: true }));

index.post('/submit', (req, res) => {
  console.log('req.body', req.body);
  bot.sendMessage(chatId, `Імя: ${req.body[0]}\nФамілія: ${req.body[2]}\nТелефон: ${req.body[3]}\nE-mail:${req.body[2]}`);
  res.end()
  });


