const mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var UserSchema = new mongoose.Schema({
	// comments: [CommentSchema],
	first_name: {type: String, required: true, minlength: 1},
	last_name: {type: String, required: true, minlength: 1},
	email: {type: String, required: true, minlength: 1}},
	{timestamps: true }
	);

var CommentSchema = new mongoose.Schema({
	user: UserSchema,	
	comment: {type: String, required: true, minlength: 1},
	likes:[]},
	{timestamps: true }
	);

var ArticleSchema = new mongoose.Schema({

	author:{type: String},
	content:{type: String},
	description:{type: String},
	publishedAt:{type: String},
	source:{id:String, name:String},
	title:{type: String},
	url:{type: String},
	urlToImage:{type: String},
	comments: [],
	likes:[]},
	{timestamps: true }
	);


var Comment = mongoose.model('Comment', CommentSchema);
var User = mongoose.model('User', UserSchema);
var Article = mongoose.model('Article', ArticleSchema);

module.exports = {Comment:Comment, User:User, Article:Article};

// Use native promises (only necessary with mongoose versions <= 4)
// mongoose.Promise = global.Promise;

