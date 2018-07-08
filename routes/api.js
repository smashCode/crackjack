// Dependencies
var express = require('express');
var router = express.Router();

// Routes
// Dependencies
var express = require('express');
var router = express.Router();

////////begin
var Image = require('../models/images');
Image.methods(['get', 'put', 'post', 'delete']);
Image.register(router, '/images');
////////end


var User = require('../models/user');
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');
//////////

var Update = require('../models/updates');
Update.methods(['get', 'put', 'post', 'delete']);
Update.register(router, '/updates');


// Return router
module.exports = router;
// Return router
module.exports = router;
