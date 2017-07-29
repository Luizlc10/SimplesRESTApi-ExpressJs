var mongoose = require('mongoose');

// genre schema
var genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: String,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);
