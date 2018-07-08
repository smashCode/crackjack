var mongoose = require('mongoose');
var restful = require('node-restful');

// create a schema
var userSchema = new mongoose.Schema({
  name: String,
  hash: String,
  location: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = restful.model('User', userSchema);