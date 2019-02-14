import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-share',
	templateUrl: './share.component.html',
	styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
	@Input() childShareVariable:any;
	share:any;
	users: any;
	editedUser:any;
	text:any;

	constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

	ngOnInit() {

		this.editedUser = {
			first_name:"",
			last_name:"",
			email:""
		}

		this.text = {
			from:"",
			to:"",
			subject:"",			
			text:"",
		}

		this.getUsers();
	}

	sendEmail(user){

		console.log("Sending E-mail");
		user['article'] = this.childShareVariable;
		console.log(user);

		let observable = this._httpService.sendEmail(user);
		observable.subscribe(data => {
			console.log("Inside the observable");
		})
		this.text = {
			from:"",
			to:"",
			subject:"",			
			text:"",
		}
		user['message'] = "";
	}

	deleteUser(user) {

		let observable = this._httpService.deleteUser(user._id);
		observable.subscribe(data => {
			this.getUsers();
		})


	}

	updateUser(object){
		console.log(object);

		let observable = this._httpService.updateUser(object._id,object);
		  observable.subscribe(data => {
			  console.log("Inside the observable");
			  console.log(data);
			  this.getUsers();
			  
			  })



		}

	getUsers(){

		let observable = this._httpService.getUsers();
		observable.subscribe(data => {
			console.log("Got all Users in the Observable");
			// console.log(data['users']);
			this.users = data['users'];

		for(var user of this.users){
			user['message'] = "";
			}
		})




	}




}
