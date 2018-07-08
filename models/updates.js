var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var updateSchema = new mongoose.Schema({
    hash: String,
    edited: Date,
    editor: String, 
    previousNode: String
});

// Return model
module.exports = restful.model('Updates', updateSchema);