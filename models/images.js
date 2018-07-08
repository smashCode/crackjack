var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var imageSchema = new mongoose.Schema({
    hash: String,
    imageDPI: String,
    resolutionx: Number,
    resolutiony: Number,
    created: Date,
    creator: String
});

// Return model
module.exports = restful.model('Images', imageSchema);
