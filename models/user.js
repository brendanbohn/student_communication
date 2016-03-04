var mongoose = require('mongoose'),
		bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	name: String,
	username: String,
	passwordDigest: String,
	email: String,
	school: String,
	bio: String, 
  img: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;