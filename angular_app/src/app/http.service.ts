import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class HttpService {

	constructor(private _http: HttpClient){
	}

	deleteUser(id){
		return this._http.delete('/deleteUser/'+id);
	}

	getComments(){
		return this._http.get('/getComments');
	}

	createArticles(articles){
		return this._http.post('/new',articles);
	}

	addComment(id,comment){
		var data = {};
		data['comment'] = comment;
		data['_id'] = id;
		return this._http.put('/addComment/',data);
	}

	getArticles(){
		return this._http.get('/getArticles');
	}

	deleteComment(id){
		return this._http.delete('/deleteComment/'+id);
	}

	sendEmail(user){
		return this._http.post('/sendEmail',user);
	}

	getOneArticle(id){
		return this._http.get('/getOneArticle/'+id);
	}

	addLike(object){
		return this._http.put('/addLike/',object);
	}

	getUsers(){
		return this._http.get('/getUsers');
	}

	deleteArticleComment(id,obj){
		return this._http.post('/deleteArticleComment/'+id,obj);
	}

	updateUser(id,updateUser){
    return this._http.put('/updateUser/'+id, updateUser); 

	}






}




