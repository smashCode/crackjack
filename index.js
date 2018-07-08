// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Update = require('./models/updates');
var User = require('./models/user');
var path = require("path");
// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
var cons = require('consolidate');

// view engine setup
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function(req,res){
	res.render("index");
});
app.get('/updates/:id',function(req,res){
	Update.find({"hash":req.params.id}, function(err,updates){
		console.log(updates);
		res.render('uploads', {updates:updates});
	})
});
app.get('/user/:id',function(req,res){
	User.find({"hash":req.params.id}, function(err,users){
		console.log(users);
		res.render('user', {users:users});
	})
});
app.get('/api/updates/:id', function(req,res){
	Update.find({"hash":req.params.id}, function(err,updates){
		console.log(updates);
		res.send(updates);
	})
});

app.get('/api/users/:id', function(req,res){
	User.find({"hash":req.params.id}, function(err,updates){
		console.log(updates);
		res.send(updates);
	})
});
// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('Listening on port 3000...');