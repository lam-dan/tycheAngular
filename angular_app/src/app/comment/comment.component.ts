import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() childVariable:any;
  comment:any;
  // allComments:any;
  user:any;
  article:any;
  displaycomments: any;
  
  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute) { }

  ngOnInit() {

    this.article = {
      author:"",
      content:"",
      description:"",
      publishedAt:"",
      source:"",
      title:"",
      url:"",
      urlToImage:"",
      comments:[],
      likes:[]
    }

    this.comment = {
      comment:"",
      likes:[]
    }

    this.user = {
      first_name: "",
      last_name: "",
      email: ""
    }
    // this.getAllArticles();
    this.getOneArticle();
  }

  addComment(){

    console.log("Inside comment component");
    console.log(this.childVariable);
    console.log(this.childVariable._id);
    this.comment['user'] = this.user;
    console.log(this.comment);

    let observable = this._httpService.addComment(this.childVariable._id,this.comment);
    observable.subscribe(data => {
      console.log("Data received from observable in component.")
      console.log(data);
      this.getOneArticle();

      this.comment = {
        comment:"",
        likes:[]
      };

      this.user = {
        first_name: "",
        last_name: "",
        email: ""
      };

    })
  }

  getOneArticle(){

    console.log("Comment Component");
    console.log(this.childVariable._id);
    let observable = this._httpService.getOneArticle(this.childVariable._id);
    observable.subscribe(data => {
      console.log("Inside the observable");
      console.log(data['article']);
      this.article = data['article'][0];
      console.log(this.article);

    })

  }

  deleteComment(i) {

    let observable = this._httpService.deleteComment(i._id);
    observable.subscribe(data => {
      this.getOneArticle();

    })

    this.deleteArticleComment(i);


  }

  deleteArticleComment(comment){

    var currentArticle = this.article;

    for(var i = 0; i<currentArticle.comments.length;i++){

      if(comment._id == currentArticle.comments[i]._id){

        console.log("Inside If Statement for For Loop");
        var temp = currentArticle.comments[i];
        currentArticle.comments[i] = currentArticle.comments[currentArticle.comments.length-1];
        currentArticle.comments[currentArticle.comments.length-1] = temp;
        currentArticle.comments.pop();
        console.log(currentArticle);

      }
    }

    console.log(currentArticle);
    console.log(this.article._id);

    let observable = this._httpService.deleteArticleComment(this.article._id,currentArticle);
    observable.subscribe(data => {
        this.getOneArticle();
      })

    }

  }




