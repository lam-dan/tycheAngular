import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class HttpService {

	constructor(private _http: HttpClient){
		// this.getAll();
		// this.deleteTask();
		// this.addCake(cake);
	}

	// deleteEmail(id){
	// 	return this._http.delete('/deleteEmail/'+id);
	// }


	deleteUser(id){
		console.log("http.service.ts:")
		console.log(id);
		return this._http.delete('/deleteUser/'+id);
	}


	getComments(){

		return this._http.get('/getComments');
	}


	createArticles(articles){

		console.log("http.service.ts");
		console.log(articles);

		return this._http.post('/new',articles);
		// return console.log("Stopped");
	}



	addComment(id,comment){

		console.log("http.service.ts: id:" +id);
		console.log(comment);

		var data = {};
		data['comment'] = comment;
		data['_id'] = id;
		console.log(data);
		return this._http.put('/addComment/',data);
	}



	getArticles(){

		console.log("http.service.ts");

		return this._http.get('/getArticles');

	}

	deleteComment(id){
		console.log("http.service.ts:")
		console.log(id);
		return this._http.delete('/deleteComment/'+id);
	}


	sendEmail(user){

		console.log("http.service.ts");

		console.log(user);


		return this._http.post('/sendEmail',user);

	}

	getOneArticle(id){
		console.log("http.service.ts");
		console.log(id);
		return this._http.get('/getOneArticle/'+id);
	}

	addLike(object){
		console.log("http.service.ts");
		console.log(object);
		return this._http.put('/addLike/',object);
	}

	getUsers(){

		console.log("http.service.ts");

		return this._http.get('/getUsers');
	}

	deleteArticleComment(id,obj){
		console.log("http.service.ts:")
		console.log(id);
		console.log(obj);
		return this._http.post('/deleteArticleComment/'+id,obj);
	}

	updateUser(id,updateUser){

		console.log("http.service.ts:")
		console.log(updateUser);
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.put('/updateUser/'+id, updateUser); 

	}






}




