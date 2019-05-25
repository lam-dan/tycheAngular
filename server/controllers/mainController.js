// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');

//sending e-mail
var nodemailer = require('nodemailer');

var model = require("../models/models");

var Comment = model.Comment;
var User = model.User;
var Article = model.Article;


module.exports = {

	deleteUser: function (req, res) {
		User.deleteOne({ _id: req.params.id }, function (err) {
			if (err) {
				res.json({ message: "Error", error: err })
			} else {
				res.json({ message: "Success" })
			}
		})
	},

	updateUser: function (req, res) {
		User.updateOne({ _id: req.params.id },
			{ $set: req.body }, function (err) {
				if (err) {
					res.json({ message: "Error", error: err })
				} else {
					res.json({ message: "Success" })
				}
			})

	},

	deleteComment: function (req, res) {
		Comment.deleteOne({ _id: req.params.id }, function (err) {
			if (err) {
				res.json({ message: "Error", error: err })
			} else {
				res.json({ message: "Success" })
			}
		})
	},


	deleteEmail: function (req, res) {
	},

	sendEmail: function (req, res) {
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'tychegaming99@gmail.com',
				pass: 'tycheGaming$99'
			}
		});

		var email = "<a href = '" + req.body.article.url + "'>" + "<img src ='" + req.body.article.urlToImage + "'></a>" + "<p>Hi " +
			req.body.first_name + ", " + "<br><br>" + req.body.article.description + "<br><br>" + "<a href = '" + req.body.article.url + "'>" +
			" Click here for more details.</a>" +
			"<br><br> Sincerely,<br>Tyche Gaming</p>";

		var mailOptions = {
			from: 'tychegaming99@gmail.com',
			to: req.body.email,
			subject: req.body.article.title,
			html: email
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				// console.log(error);
			} else {
				// console.log('Email sent: ' + info.response);
			}
		});

	},


	view: function (req, res) {
		Article.find({ _id: req.params.id }).sort({ _id: 'desc' }).exec(function (err, article) {
			if (err) {
				res.json({ message: "Error", error: err })
			} else {
				res.json({ message: "Success", article })
			}
		})

	},

	getComments: function (req, res) {
		Comment.find({}, function (err, comments) {
			if (err) {
				res.json({ message: "err" })
			} else {
				res.json({ message: "success", comments })
			}
		})

	},

	getArticles: function (req, res) {
		Article.find({}, function (err, articles) {
			if (err) {
				res.json({ message: "err" })
			} else {
				res.json({ message: "success", articles })
			}
		})
	},

	getUsers: function (req, res) {
		User.find({}, function (err, users) {
			if (err) {
				res.json({ message: "err" })
			} else {
				res.json({ message: "success", users })
			}
		})
	},

	addLike: function (req, res) {
		Article.updateOne({ _id: req.body._id },
			{ $push: { likes: req.body.likes } }, function (err, article) {
				// This code will run when the DB has attempted to update the matching record.
				if (err) {
					res.json({ message: "Error", error: err })
				} else {
					res.json({ message: "Success", article })
				}
			})
	},

	addComment: function (req, res) {
		var user = new User(req.body.comment.user);
		user.save(function (err, user) {
			if (err) {
				res.json({ message: "Error", error: err })
			} else {
				var comment = new Comment({ comment: req.body.comment.comment });
				comment['user'] = user;
				comment.save(function (err, comment) {

					// console.log(comment);

					if (err) {
						res.json({ message: "Error", error: err });
					} else {
						Article.updateOne({ _id: req.body._id },
							{ $push: { comments: comment } }, function (err, article) {
								if (err) {
									res.json({ message: "Error", error: err })
								} else {
								}
							})

					}
				})

				res.json({ message: "Success", user });
			}
		})
	},

	deleteArticleComment: function (req, res) {
		Article.updateOne({ _id: req.params.id }, { $set: req.body }, function (err, cake) {
			if (err) {
				res.json({ message: "Error", error: err })
			} else {
				res.json({ message: "Success", cake })
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

	create: function (req, res) {
		var article;
		Article.find({}, function (err, articles) {
			if (err) {
				res.json({ message: "err" })
			} else {
				if (articles == undefined || articles.length == 0) {
					for (var i = 0; i < req.body.articles.length; i++) {
						article = new Article(req.body.articles[i]);
						article.comments = [];
						article.likes = [];
						article.save(function (err, data) {
							if (err) {
								// res.json({message: "Error", error: err});
							} else {
								// res.json({message: "Success",data});
							}
						});
					}
				} else {
					//creates a variable called upLoadResult that are only articles that aren't in MongoDB
					var uploadResult = req.body.articles.filter(
						function (o1) {
							// filter out (!) items in result2
							return !articles.some(
								function (o2) {
									return o1.url === o2.url;          // assumes unique id
								});
						})

					//Iterates over uploadResult object and saves each of them article objects into Mongo
					for (var i = 0; i < uploadResult.length; i++) {
						article = new Article(uploadResult[i]);
						article.comments = [];
						article.like = [];
						article.save(function (err, data) {
							if (err) {
							} else {
							}
						})
					}
				}
				res.json({ message: "Success", articles });
			}
		})

	}

};
