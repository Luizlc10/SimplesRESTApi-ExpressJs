var mongoose = require('mongoose');

// book schema
var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: String,
    default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// get books
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
};
// get book by id
module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
};
