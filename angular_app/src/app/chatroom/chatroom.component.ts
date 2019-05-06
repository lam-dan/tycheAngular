import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as io from 'socket.io-client';
import * as $ from 'jquery';

@Component({
	selector: 'app-chatroom',
	templateUrl: './chatroom.component.html',
	styleUrls: ['./chatroom.component.css']
})

export class ChatroomComponent implements OnInit {
	@Input() childChatVariable:any;
	messageText: string;
	socket: SocketIOClient.Socket;
	name: any;

	constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { 
		this.socket = io.connect();
	}

	ngOnInit() {
		$('.chatroom').scrollTop($('.chatroom')[0].scrollHeight);
		// this.messages = new Array();
		//function to broadcast a global message when a new user joins to all sockets
		this.name = prompt("Please enter your name:");
		var number = Math.floor((Math.random()*1000)+1);
		if (this.name === null){
			if(number.toString().length < 3){
				this.name = 'Guest0'+number;
			}
			this.name = "Guest"+number;
		}

		this.socket.emit("got_a_new_user", {data:this.name});
		
		this.socket.on('new_user', function(data){
			$("#chat").html(data);
			$('.chatroom').scrollTop($('.chatroom')[0].scrollHeight);
		});
	}

	sendMessage(messageText) {
		//gets message from html and sends it to server
		this.socket.emit('send-message', messageText);
		//receives message from server and sends it back to front-end
		this.socket.on("messageToAll", function(message){
			$("#chat").html(message);
			$('.chatroom').scrollTop($('.chatroom')[0].scrollHeight);
		});	
		this.messageText = "";
	}
}
