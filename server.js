require('dotenv').config();

//////////////////
// REQUIREMENTS //
//////////////////

var express = require('express'),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		bcrypt = require('bcrypt');

var app = express();


////////////////
// MIDDLEWARE //
////////////////

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


////////////
// ROUTES //
////////////

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/home', function (req, res) {
	res.render('loggedIn');
});

///////////////////
// SET UP SERVER //
///////////////////

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port 3000');
});