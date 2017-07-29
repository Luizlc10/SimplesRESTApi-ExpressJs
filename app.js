var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

// root
app.get('/', function(req, res){
  res.send('Please, use /api/books or /api/genres');
});

app.listen(3000);
console.log('server runing on 3000..');
