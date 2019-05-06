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
		user['article'] = this.childShareVariable;

		let observable = this._httpService.sendEmail(user);
		observable.subscribe(data => {
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

		let observable = this._httpService.updateUser(object._id,object);
		  observable.subscribe(data => {
			  this.getUsers();
			  })
		}

	getUsers(){

		let observable = this._httpService.getUsers();
		observable.subscribe(data => {
			this.users = data['users'];

		for(var user of this.users){
			user['message'] = "";
			}
		})
	}

}
