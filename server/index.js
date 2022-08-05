var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

const nftsRoute = require('./routes/nfts');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/nfts/v1/', nftsRoute);

app.listen(8001, function () {
  console.log('Listening to Port 8001');
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});