var express = require('express');
var app = express();
var path = require('path')
var films = require('./client/src/models/films')();
var FilmApi = require('./api/filmApi');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

app.listen(3000, function () {
  new FilmApi(app);
  console.log('App running on port '+this.address().port);
});
