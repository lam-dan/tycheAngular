import { HttpService } from '../http.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	@Input() formToShow: any;
	@Output() updateEmitter = new EventEmitter();

	newCake : any;
  error : any;

  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newCake = { 
      baker: "",
      imgurl: "",
    };
    // this.showAll();
  }

  // showAll(): void{
    //   let observable = this._httpService.getAll();

    //   observable.subscribe(data => {
      //     this.cakes = data['cakes'];

      //     console.log(this.cakes);

      //   }); 
      // }  

      addCake(){

        console.log("component:");
        console.log(this.newCake);

        let observable = this._httpService.addCake(this.newCake);
        observable.subscribe(data => {

          console.log("Within Observable:");
          console.log(data);

          if (data['error'] == null){
            this.newCake = {
              baker: "",
              imgurl: ""
            };

            this.updateEmitter.emit(true);

          }else{
            this.error = data['error']['message']; 

          }





        })
      }





    }
