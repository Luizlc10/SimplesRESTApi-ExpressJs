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


// list of all the genres
app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

// list of all the books
app.get('/api/books', function(req, res){
  Book.getBooks(function(err, books){
    if (err) {
      throw err;
    }
    res.json(books);
  });
});
// especific books (id)
app.get('/api/books/:_id', function(req, res){
  Book.getBookById(req.params._id, function(err, book){
    if (err) {
      throw err;
    }
    res.json(book);
  });
});


app.listen(3000);
console.log('server runing on 3000..');
