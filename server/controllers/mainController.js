// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');

//sending e-mail
var nodemailer = require('nodemailer');

var model = require("../models/models");

var Comment = model.Comment;
var User = model.User;
var Article = model.Article;


module.exports = {
	
	deleteUser: function(req, res) {
    	// code...
    	console.log("Main Controller");
    	
    	User.deleteOne({_id:req.params.id},function(err){
    		if(err) {

    			res.json({message: "Error", error: err})
    		}else{
    			res.json({message: "Success"})
    		}
    	})
    },

    updateUser: function(req, res) {
    	// code...
    	console.log("Main Controller");

    	User.updateOne({_id:req.params.id}, 
    		{$set:req.body}, function(err){
	 // This code will run when the DB has attempted to update the matching record.
			 if(err){
			 	res.json({message: "Error", error: err})
			 }else{
			 	res.json({message: "Success"})
			 }
		})

    },

    deleteComment: function(req, res) {
    	// code...
    	console.log("Main Controller");
    	Comment.deleteOne({_id:req.params.id},function(err){
    		if(err) {

    			res.json({message: "Error", error: err})
    		}else{
    			res.json({message: "Success"})
    		}
    	})
    },


    deleteEmail: function(req, res) {
    	// code...
    	console.log("Main Controller");
    },

    sendEmail: function(req,res){

    	console.log("Main Controller");
    	console.log(req.body);


    	var transporter = nodemailer.createTransport({
    		service: 'gmail',
    		auth: {
    			user: 'tychegaming99@gmail.com',
    			pass: 'tycheGaming$99'
    		}
    	});

    	var email = "<a href = '"+req.body.article.url+"'>"+"<img src ='" + req.body.article.urlToImage + "'></a>"+"<p>Hi "+
    	req.body.first_name+", "+"<br><br>"+req.body.article.description+"<br><br>"+ "<a href = '"+req.body.article.url+"'>"+
    	" Click here for more details.</a>"+ 
    	"<br><br> Sincerely,<br>Tyche Gaming</p>";

    	var mailOptions = {
    		from: 'tychegaming99@gmail.com',
    		to: req.body.email,
    		subject: req.body.article.title,
    		html: email
    	};

    	transporter.sendMail(mailOptions, function(error, info){
    		if (error) {
    			console.log(error);
    		} else {
    			console.log('Email sent: ' + info.response);
    		}
    	});

    },


    view: function(req, res) {
		// code...
		console.log("Main Controller");
		console.log(req.params.id);

		Article.find({_id:req.params.id}).sort({_id:'desc'}).exec(function(err, article) {
			if(err) {
				console.log("Returned error", err);
				res.json({message: "Error", error: err})
			}else{
				res.json({message: "Success", article})		    	
			}
		})

	},

	getComments: function(req,res){

		Comment.find({}, function(err, comments){
			if(err){
				res.json({message:"err"})
			}else{
				res.json({message:"success", comments})
			}
		})

	},
	
	getArticles: function(req,res){
		console.log("Main Controller");

		Article.find({},function(err,articles){
			if(err){
				res.json({message:"err"})
			}else{
				res.json({message:"success",articles})
			}
		})
	},

	getUsers: function(req,res){
		console.log("Main Controller");

		User.find({},function(err,users){
			if(err){
				res.json({message:"err"})
			}else{
				res.json({message:"success",users})
			}
		})
	},

	addLike: function(req, res){
		// Creates Comment Object
		console.log("Main Controller");
		console.log(req.body);
		console.log(req.body._id);
		console.log(req.body.likes);
		Article.updateOne({_id:req.body._id}, 
			{$push:{likes:req.body.likes}}, function(err,article){
				// This code will run when the DB has attempted to update the matching record.
				if(err){
					res.json({message: "Error", error: err})
				}else{
					res.json({message: "Success",article})
				}
			})
	},

	addComment: function(req, res){
		// Creates Comment Object
		console.log("Main Controller");
		// console.log(req.params.id);
		// console.log(req.body.user);
		console.log(req.body);
		console.log(req.body._id);

		var user = new User(req.body.comment.user);
		console.log(user);

		user.save(function(err,user){
			if(err){
				res.json({message: "Error", error: err})
			}else{
				// console.log(user);
				console.log("User saved in datbase");
				// console.log(req.body.comment.comment);
				var comment = new Comment({comment:req.body.comment.comment});

				console.log(comment)
				comment['user'] = user;
				console.log(comment);

				comment.save(function(err,comment){

					// console.log(comment);

					if(err){
						res.json({message: "Error", error:err});
					}else{
						console.log("Comment saved in database");

						// console.log(user._id);

						Article.updateOne({_id:req.body._id}, 
							{$push:{comments:comment}}, function(err,article){

								// console.log(article);
						// This code will run when the DB has attempted to update the matching record.
						if(err){
							res.json({message: "Error", error: err})
						}else{

							console.log("Article updated with new comment");

							console.log(article);
						}
					})

					}
				})

				res.json({message: "Success", user});
			}
		})
	},

	deleteArticleComment: function(req, res) {

	// code...
	console.log("Main Controller.");
	console.log("Object Id: " + Object(req.params.id));
	console.log(req.body);

	// console.log("Nested Object Id: " + Object(req.body._id));
	// req.body.comment = "";
	// req.body.user = {};
	// console.log(req.body);

	Article.updateOne({_id : req.params.id}, {$set:req.body}, function(err, cake){
		if (err){
			res.json({message: "Error", error: err})
		}else{
			console.log("return cake",cake);
			res.json({message: "Success", cake})
		}
	})

},

	// //Pushes Comment object into Article Object
	// 	Article.updateOne({_id:req.params.id}, 
	// 		{$push:{comments:comment}}, function(err,article){
	// 			// This code will run when the DB has attempted to update the matching record.
	// 			if(err){
	// 				res.json({message: "Error", error: err})
	// 			}else{
	// 				res.json({message: "Success",article})
	// 			}
	// 		})

	// 	User.updateOne({_id:req.params.id}, 
	// 		{$push:{comments:comment}}, function(err,user){
	// 			// This code will run when the DB has attempted to update the matching record.
	// 			if(err){
	// 				res.json({message: "Error", error: err})
	// 			}else{
	// 				res.json({message: "Success",user})
	// 			}
	// 		})
	// },
	
	create: function(req, res) {
		var article;
		console.log(req.body.articles);
		console.log("Main Controller");

		Article.find({},function(err,articles){
			if(err){
				res.json({message:"err"})
			}else{
				console.log("Else");

				if(articles == undefined || articles.length == 0){

					for(var i = 0; i < req.body.articles.length;i++){

							// if(req.body.articles[i].title){

							// }

							article = new Article(req.body.articles[i]);
							article.comments = [];
							article.likes = [];
							// console.log(article);

							article.save(function(err,data){
								if(err){
									console.log("Error");
									// res.json({message: "Error", error: err});
								} else {
									console.log("Success");
									// res.json({message: "Success",data});
								}
							});
						}
					}else{
						console.log("Not Empty");
					//Mongo DB collection
					// console.log(articles);
					//api data
					// console.log(req.body.articles);

					//creates a variable called upLoadResult that are only articles that aren't in MongoDB
					var uploadResult = req.body.articles.filter(
						function(o1){
					    // filter out (!) items in result2
					    return !articles.some(

					    	function(o2){
					        	// console.log(o1.url);
					        	// console.log(o2.url);
					            return o1.url === o2.url;          // assumes unique id
					        });
					})

					//Iterates over uploadResult object and saves each of them article objects into Mongo
					for (var i = 0; i<uploadResult.length;i++){
						article = new Article(uploadResult[i]);
						article.comments = [];
						article.like = [];

						article.save(function(err,data){
							if(err){
								console.log("Error");
							}else{
								console.log("Success");

							}
						})
					}

				}

				res.json({message: "Success", articles});

			}
		})

	}

};
