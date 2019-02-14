var mainController = require('../controllers/mainController');

module.exports = function(app){

// retrieve all comments
app.get('/getComments', mainController.getComments);

//retrieve 1 article with name
app.get('/getOneArticle/:id', mainController.view);

// retrieve all articles
app.get('/getArticles', mainController.getArticles);

app.post('/new', mainController.create);

app.put('/addComment', mainController.addComment);

app.put('/addLike', mainController.addLike);

// app.delete('deleteComment', mainController.deleteComment);

// //delete 
app.delete('/deleteUser/:id', mainController.deleteUser);

// //delete 
app.delete('/deleteComment/:id', mainController.deleteComment);

app.get('/getUsers', mainController.getUsers);

app.post('/sendEmail', mainController.sendEmail);

// // update  
// app.put('/update/:id', mainController.update);

// //delete 
app.post('/deleteArticleComment/:id', mainController.deleteArticleComment);

app.put('/updateUser/:id', mainController.updateUser);



}