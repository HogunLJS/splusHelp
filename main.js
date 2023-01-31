const express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var sanitizeHtml = require('sanitize-html');
var path = require('path');
var template = require('./lib/template');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// console.log(path.join(__dirname, 'public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/manual', function(req, res) {
  res.sendFile(__dirname + '/views/manual-column.html');
});

app.get('/search', function(req, res) {
  template.index(req, res, 'Test', 'Subtitle', 'Context');
})

app.listen(3000, () => console.log('Help App Started on port 3000'));
