
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // mArticles:Array<any>;
  mArticles:any;
  mSources:Array<any>;
  showFormObject:any;
  likes: any;
  articles: any;
  showFlag = false;

  showShareFlag = false;
  showShareObject: any;

  showChatFlag = false;
  showChatObject: any;


  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute,private newsapi:NewsApiService){
    console.log('app component constructor called');

  }

  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){

    //load articles
    console.log("Can changes happen");

    this.newsapi.initArticles().subscribe(data => {
      this.mArticles = data['articles']
      console.log(this.mArticles);

      this.createArticles();
      this.getAllArticles();
    }
    );

    //load news sources for side nav

    this.newsapi.initSources().subscribe(data=> {
      this.mSources = data['sources']


    });




  }

  showComment(article){

    this.showShareFlag = false;
    this.showChatFlag = false
    this.showFlag = true;    
    article['comments'] = [];
    this.showFormObject = article;

  }

  shareArticle(article){
    console.log("This Shown Share Object: ");
    console.log(article);

    this.showFlag = false;
    this.showChatFlag = false

    this.showShareFlag = true;  
    this.showShareObject = article;

  }

  showChatRoom(article){

    this.showFlag = false;
    this.showShareFlag = false;

    this.showChatFlag = true;
    this.showChatObject = article;



  }

  addLike(article){
    console.log("Likes");
    article['likes'] = ["guestUserId"];
    console.log(article);

    let observable = this._httpService.addLike(article);
    observable.subscribe(data => {
      console.log("In the Observable");
      console.log(data);
      this.getAllArticles();


    })
  }

  getLikes(){

  }

  createArticles(){

    console.log("Create Articles Started");

    this.articles = this.mArticles;
    var dummyDict = {};
    dummyDict['articles'] = this.articles;
    console.log(dummyDict);

    let observable = this._httpService.createArticles(dummyDict);
    observable.subscribe(data => {

      console.log("In the Observable");
      console.log(data);
      console.log(data['articles']);

    })


  }

  getAllArticles(){
    console.log("Get All Articles");
    let observable = this._httpService.getArticles();
    observable.subscribe(data =>{

      console.log("In the observable");

      for(var j = 0; j< this.mArticles.length; j++){

        for(var i = 0; i< data['articles'].length; i++){

          if(this.mArticles[j].url == data['articles'][i].url){

            this.mArticles[j]['_id'] = data['articles'][i]._id;
            this.mArticles[j]['likes'] = data['articles'][i].likes;


          }
        }
      }
      console.log(this.mArticles);
    })
  }




  searchArticles(source){

    console.log("Search Articles: ");

    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => {

      console.log("Inside the observable");
      this.mArticles = data['articles'];
      this.createArticles();
      this.getAllArticles();
    });



  }


}

