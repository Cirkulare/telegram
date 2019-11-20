process.env.NTBA_FIX_319 = 1;
const TelegramBot = require ('node-telegram-bot-api');
const express = require ('express');
const Busboy = require('busboy');
const token = '1020374199:AAEoOgadAvtPE4BIIFbIi1aM6wFonrRhpYk';
const bot = new TelegramBot(token, {polling: true});
const chatId = -352778269;
const index = express();

  index.listen (3001, '127.0.0.1');
  index.use(express.static(__dirname + '/static'));
  index.get('/', function(req, res){
  res.sendfile(__dirname + '/static/index.html');
  });
  index.post('/submit', (req, res) => {
     let busboy = new Busboy({ headers: req.headers });
    Busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename);
      file.on('data', function(data) {
        console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
      });
      file.on('end', function() {
        console.log('File [' + fieldname + '] Finished');
      });
    });
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
    busboy.on('finish', function() {
      console.log('Done parsing form!');
      res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end();
    });
  bot.sendMessage(chatId, busboy);
  res.end()
});
