(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
    // use a colon and parameter name to include a parameter in the url
    // { path: 'gamma/:id', component: GammaComponent },
    // redirect to /alpha if there is nothing in the url
    // { path: '', pathMatch: 'full', redirectTo: '/list' },
    // the ** will catch anything that did not match any of the above routes
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.example-card{\r\n\r\n    margin-top: 4px;\r\n}\r\n\r\n.example-header-image { \r\n  background-size: cover;\r\n}\r\n\r\n.title{\r\n    font-weight: bold;\r\n}\r\n\r\n.img-article{\r\n\r\n\r\n}\r\n\r\n.action-buttons{\r\n    text-align: center;\r\n}\r\n\r\n.example-container {\r\n    width: 100%;\r\n    height: auto;\r\n    border: 1px solid rgba(111, 111, 111, 0.50);\r\n}\r\n\r\n.example-sidenav-content {\r\n    display: flex;\r\n    height: 75%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n    padding: 20px;\r\n}\r\n\r\n.source-name {\r\n    margin-left:5px; \r\n}\r\n\r\n.list-item:hover{\r\n    cursor: pointer;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}\r\n\r\n@media only screen and (min-width: 1150px) {\r\n  /* For desktop: */\r\n  .col-1 {width: 8.33%;}\r\n  .col-2 {width: 16.66%;}\r\n  .col-3 {width: 25%;}\r\n  .col-4 {width: 33.33%;}\r\n  .col-5 {width: 41.66%;}\r\n  .col-6 {width: 50%;}\r\n  .col-7 {width: 58.33%;}\r\n  .col-8 {width: 66.66%;}\r\n  .col-9 {width: 75%;}\r\n  .col-10 {width: 83.33%;}\r\n  .col-11 {width: 91.66%;}\r\n  .col-12 {width: 100%;}\r\n  .col-13 {height: 100%;}\r\n  .col-14 {height: 10%;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0FBR0E7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVEsWUFBWSxDQUFDO0VBQ3JCLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLFFBQVEsVUFBVSxDQUFDO0VBQ25CLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLFFBQVEsVUFBVSxDQUFDO0VBQ25CLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLFFBQVEsYUFBYSxDQUFDO0VBQ3RCLFFBQVEsVUFBVSxDQUFDO0VBQ25CLFNBQVMsYUFBYSxDQUFDO0VBQ3ZCLFNBQVMsYUFBYSxDQUFDO0VBQ3ZCLFNBQVMsV0FBVyxDQUFDO0VBQ3JCLFNBQVMsWUFBWSxDQUFDO0VBQ3RCLFNBQVMsV0FBVyxDQUFDO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2UgeyBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmltZy1hcnRpY2xle1xyXG5cclxuXHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gICAgXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC41MCk7XHJcbn1cclxuICBcclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gIFxyXG4uZXhhbXBsZS1zaWRlbmF2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5zb3VyY2UtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7IFxyXG59XHJcblxyXG4ubGlzdC1pdGVtOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTUwcHgpIHtcclxuICAvKiBGb3IgZGVza3RvcDogKi9cclxuICAuY29sLTEge3dpZHRoOiA4LjMzJTt9XHJcbiAgLmNvbC0yIHt3aWR0aDogMTYuNjYlO31cclxuICAuY29sLTMge3dpZHRoOiAyNSU7fVxyXG4gIC5jb2wtNCB7d2lkdGg6IDMzLjMzJTt9XHJcbiAgLmNvbC01IHt3aWR0aDogNDEuNjYlO31cclxuICAuY29sLTYge3dpZHRoOiA1MCU7fVxyXG4gIC5jb2wtNyB7d2lkdGg6IDU4LjMzJTt9XHJcbiAgLmNvbC04IHt3aWR0aDogNjYuNjYlO31cclxuICAuY29sLTkge3dpZHRoOiA3NSU7fVxyXG4gIC5jb2wtMTAge3dpZHRoOiA4My4zMyU7fVxyXG4gIC5jb2wtMTEge3dpZHRoOiA5MS42NiU7fVxyXG4gIC5jb2wtMTIge3dpZHRoOiAxMDAlO31cclxuICAuY29sLTEzIHtoZWlnaHQ6IDEwMCU7fVxyXG4gIC5jb2wtMTQge2hlaWdodDogMTAlO31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"col-9 col-14\">\r\n<mat-toolbar color=\"primary\">\r\n  <button mat-button (click)=\"sidenav.toggle()\" ><mat-icon>menu</mat-icon></button>\r\n  <span>TYCHE</span>  \r\n  <span class=\"example-spacer\"></span>\r\n  <button mat-button [matMenuTriggerFor]=\"appMenu\"><mat-icon>settings</mat-icon></button>\r\n</mat-toolbar>\r\n<mat-menu #appMenu=\"matMenu\">\r\n  <button mat-menu-item> Settings </button>\r\n  <button mat-menu-item> Help </button>\r\n</mat-menu>\r\n\r\n<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav #sidenav class=\"example-sidenav\">\r\n    <mat-list class=\"list-nav\">\r\n      <mat-list-item class=\"list-item\" *ngFor=\"let source of mSources\" (click)=\"searchArticles(source.id);sidenav.close();\">\r\n        <div mat-card-avatar [ngStyle]=\"{'background-image': 'url(../assets/images/'+ source.id +'.png)'}\" class=\"example-header-image\"></div>\r\n        <span class=\"source-name\"> {{source.name}}</span>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-card class=\"example-card\"  *ngFor=\"let article of mArticles\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar [ngStyle]=\"{'background-image': 'url(../assets/images/'+ article.source.id +'.png)'}\" class=\"example-header-image\"></div>\r\n      <mat-card-title class=\"title\">{{article.title}}</mat-card-title>\r\n      <mat-card-subtitle>{{article.source.name}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image class=\"img-article\" src={{article.urlToImage}} alt=\"\">\r\n    <mat-card-content>\r\n      <p>\r\n        {{article.description}}\r\n      </p>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions class=\"action-buttons\">\r\n      <button (click) = \"addLike(article)\" mat-button color=\"primary\"><mat-icon>thumb_up_alt</mat-icon> \r\n\r\n        <span *ngIf = \"article.likes\">{{article.likes.length}}</span>\r\n\r\n      </button>\r\n      <button (click) =\"showComment(article)\" mat-button color=\"primary\"><mat-icon>comment</mat-icon> Comments</button>\r\n\r\n      <button (click) = \"shareArticle(article)\" mat-button color=\"primary\"><mat-icon>share</mat-icon> Share</button>\r\n\r\n      <button (click) = \"showChatRoom(article)\" mat-button color=\"primary\"><mat-icon>chat</mat-icon> Chat</button>\r\n\r\n      <a mat-button color=\"primary\" href={{article.url}} target=\"_blank\" ><mat-icon>visibility</mat-icon> More</a>\r\n    </mat-card-actions>\r\n\r\n    <app-comment *ngIf = \"showFormObject != null && showFormObject == article && showFlag == true\" [childVariable]=\"showFormObject\"></app-comment>\r\n\r\n    <app-share *ngIf = \"showShareObject != null && showShareObject == article && showShareFlag == true\" [childShareVariable]=\"showShareObject\"></app-share>\r\n\r\n    <app-chatroom *ngIf = \"showChatObject != null && showChatObject == article && showChatFlag == true\" [childChatVariable]=\"showChatObject\"></app-chatroom>\r\n\r\n  </mat-card>\r\n\r\n</mat-sidenav-container>\r\n\r\n</div>\r\n\r\n<!-- {{mArticles | json}} -->\r\n\r\n<!-- [childChatVariable]=\"showChatObject\" -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-api.service */ "./src/app/news-api.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router, _route, newsapi) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.newsapi = newsapi;
        this.showFlag = false;
        this.showShareFlag = false;
        this.showChatFlag = false;
    }
    // ngOnInit will run when the component is initialized, after the constructor method.
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load articles
        this.newsapi.initArticles().subscribe(function (data) {
            _this.mArticles = data['articles'];
            _this.createArticles();
            _this.getAllArticles();
        });
        //load news sources for side nav
        this.newsapi.initSources().subscribe(function (data) {
            _this.mSources = data['sources'];
        });
    };
    AppComponent.prototype.showComment = function (article) {
        this.showShareFlag = false;
        this.showChatFlag = false;
        this.showFlag = true;
        article['comments'] = [];
        this.showFormObject = article;
    };
    AppComponent.prototype.shareArticle = function (article) {
        this.showFlag = false;
        this.showChatFlag = false;
        this.showShareFlag = true;
        this.showShareObject = article;
    };
    AppComponent.prototype.showChatRoom = function (article) {
        this.showFlag = false;
        this.showShareFlag = false;
        this.showChatFlag = true;
        this.showChatObject = article;
    };
    AppComponent.prototype.addLike = function (article) {
        var _this = this;
        article['likes'] = ["guestUserId"];
        var observable = this._httpService.addLike(article);
        observable.subscribe(function (data) {
            _this.getAllArticles();
        });
    };
    AppComponent.prototype.getLikes = function () {
    };
    AppComponent.prototype.createArticles = function () {
        this.articles = this.mArticles;
        var dummyDict = {};
        dummyDict['articles'] = this.articles;
        var observable = this._httpService.createArticles(dummyDict);
        observable.subscribe(function (data) {
        });
    };
    AppComponent.prototype.getAllArticles = function () {
        var _this = this;
        var observable = this._httpService.getArticles();
        observable.subscribe(function (data) {
            for (var j = 0; j < _this.mArticles.length; j++) {
                for (var i = 0; i < data['articles'].length; i++) {
                    if (_this.mArticles[j].url == data['articles'][i].url) {
                        _this.mArticles[j]['_id'] = data['articles'][i]._id;
                        _this.mArticles[j]['likes'] = data['articles'][i].likes;
                    }
                }
            }
        });
    };
    AppComponent.prototype.searchArticles = function (source) {
        var _this = this;
        this.newsapi.getArticlesByID(source).subscribe(function (data) {
            _this.mArticles = data['articles'];
            _this.createArticles();
            _this.getAllArticles();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _news_api_service__WEBPACK_IMPORTED_MODULE_4__["NewsApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-api.service */ "./src/app/news-api.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_12__["CommentComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_13__["ShareComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__["ChatroomComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_11__["NgPipesModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _news_api_service__WEBPACK_IMPORTED_MODULE_4__["NewsApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatroom{\r\n\toutline: 1px solid rgba(111, 111, 111, 0.50);\r\n\theight:100px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n#message {\r\n\twidth: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDRDQUE0QztDQUM1QyxZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0cm9vbXtcclxuXHRvdXRsaW5lOiAxcHggc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjUwKTtcclxuXHRoZWlnaHQ6MTAwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jbWVzc2FnZSB7XHJcblx0d2lkdGg6IDMwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"chatroom\">\r\n\t<!-- adds message to p tag -->\r\n\t<mat-card-content>\r\n\t\t<p id = \"chat\"></p>\r\n\t</mat-card-content>\r\n</div>\r\n\r\n<div class = \"chatbox\">\r\n\r\n\t<form id =\"trigger\" (submit) = \"sendMessage(messageText)\">\r\n\r\n\t\t<input id = \"message\" type=\"text\" name=\"messageText\" [(ngModel)] = \"messageText\"><br>\r\n\t\t<input type=\"submit\" value=\"Send\">\r\n\t</form>\r\n\r\n</div>\r\n\r\n<!-- {{messageText | json}}\r\n{{messages | json}} -->"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["connect"]();
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('.chatroom').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_5__('.chatroom')[0].scrollHeight);
        // this.messages = new Array();
        //function to broadcast a global message when a new user joins to all sockets
        this.name = prompt("Please enter your name:");
        var number = Math.floor((Math.random() * 1000) + 1);
        if (this.name === null) {
            if (number.toString().length < 3) {
                this.name = 'Guest0' + number;
            }
            this.name = "Guest" + number;
        }
        this.socket.emit("got_a_new_user", { data: this.name });
        this.socket.on('new_user', function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#chat").html(data);
            jquery__WEBPACK_IMPORTED_MODULE_5__('.chatroom').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_5__('.chatroom')[0].scrollHeight);
        });
    };
    ChatroomComponent.prototype.sendMessage = function (messageText) {
        //gets message from html and sends it to server
        this.socket.emit('send-message', messageText);
        //receives message from server and sends it back to front-end
        this.socket.on("messageToAll", function (message) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#chat").html(message);
            jquery__WEBPACK_IMPORTED_MODULE_5__('.chatroom').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_5__('.chatroom')[0].scrollHeight);
        });
        this.messageText = "";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatroomComponent.prototype, "childChatVariable", void 0);
    ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea{\r\n\twidth: 100%;\r\n\r\n}\r\n\r\n.date{\r\n/*\tmargin-left: 52%;*/\r\n\t float:right;\r\n/*\ttext-align: center;*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXOztBQUVaOztBQUVBO0FBQ0EscUJBQXFCO0VBQ25CLFdBQVc7QUFDYix1QkFBdUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhe1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmRhdGV7XHJcbi8qXHRtYXJnaW4tbGVmdDogNTIlOyovXHJcblx0IGZsb2F0OnJpZ2h0O1xyXG4vKlx0dGV4dC1hbGlnbjogY2VudGVyOyovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit) =\"addComment()\">\r\n\t<p>First Name: <input type = \"text\" name = \"user.first_name\" [(ngModel)] = \"user.first_name\" size = \"15\">\r\n\t\tLast Name: <input type = \"text\" name = \"user.last_name\" [(ngModel)] = \"user.last_name\" size = \"15\">\r\n\t</p>\r\n\t<p>Email: <input type = \"text\" name = \"user.email\" [(ngModel)] = \"user.email\" size = \"21\"></p>\r\n\t<textarea name = \"comment.comment\" [(ngModel)] = \"comment.comment\" ></textarea>\r\n\t<input type = \"submit\" value = \"Submit\">\r\n</form>\r\n\r\n<p></p>\r\n\r\n<div *ngFor = \"let i of article.comments\" >\r\n\t<span style=\"color:blue\">{{i.user.first_name}} {{i.user.last_name}}</span> {{i.comment}} <span class = \"date\">{{i.createdAt | date:'medium'}}</span>\r\n\t<button (click) = \"deleteComment(i)\">Delete</button>\r\n\r\n</div>\r\n\r\n<!-- {{user | json}}\r\n{{comment | json}} -->"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CommentComponent = /** @class */ (function () {
    function CommentComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.article = {
            author: "",
            content: "",
            description: "",
            publishedAt: "",
            source: "",
            title: "",
            url: "",
            urlToImage: "",
            comments: [],
            likes: []
        };
        this.comment = {
            comment: "",
            likes: []
        };
        this.user = {
            first_name: "",
            last_name: "",
            email: ""
        };
        this.getOneArticle();
    };
    CommentComponent.prototype.addComment = function () {
        var _this = this;
        this.comment['user'] = this.user;
        var observable = this._httpService.addComment(this.childVariable._id, this.comment);
        observable.subscribe(function (data) {
            _this.getOneArticle();
            _this.comment = {
                comment: "",
                likes: []
            };
            _this.user = {
                first_name: "",
                last_name: "",
                email: ""
            };
        });
    };
    CommentComponent.prototype.getOneArticle = function () {
        var _this = this;
        var observable = this._httpService.getOneArticle(this.childVariable._id);
        observable.subscribe(function (data) {
            _this.article = data['article'][0];
        });
    };
    CommentComponent.prototype.deleteComment = function (i) {
        var _this = this;
        var observable = this._httpService.deleteComment(i._id);
        observable.subscribe(function (data) {
            _this.getOneArticle();
        });
        this.deleteArticleComment(i);
    };
    CommentComponent.prototype.deleteArticleComment = function (comment) {
        var _this = this;
        var currentArticle = this.article;
        for (var i = 0; i < currentArticle.comments.length; i++) {
            if (comment._id == currentArticle.comments[i]._id) {
                var temp = currentArticle.comments[i];
                currentArticle.comments[i] = currentArticle.comments[currentArticle.comments.length - 1];
                currentArticle.comments[currentArticle.comments.length - 1] = temp;
                currentArticle.comments.pop();
            }
        }
        var observable = this._httpService.deleteArticleComment(this.article._id, currentArticle);
        observable.subscribe(function (data) {
            _this.getOneArticle();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "childVariable", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.deleteUser = function (id) {
        return this._http.delete('/deleteUser/' + id);
    };
    HttpService.prototype.getComments = function () {
        return this._http.get('/getComments');
    };
    HttpService.prototype.createArticles = function (articles) {
        return this._http.post('/new', articles);
    };
    HttpService.prototype.addComment = function (id, comment) {
        var data = {};
        data['comment'] = comment;
        data['_id'] = id;
        return this._http.put('/addComment/', data);
    };
    HttpService.prototype.getArticles = function () {
        return this._http.get('/getArticles');
    };
    HttpService.prototype.deleteComment = function (id) {
        return this._http.delete('/deleteComment/' + id);
    };
    HttpService.prototype.sendEmail = function (user) {
        return this._http.post('/sendEmail', user);
    };
    HttpService.prototype.getOneArticle = function (id) {
        return this._http.get('/getOneArticle/' + id);
    };
    HttpService.prototype.addLike = function (object) {
        return this._http.put('/addLike/', object);
    };
    HttpService.prototype.getUsers = function () {
        return this._http.get('/getUsers');
    };
    HttpService.prototype.deleteArticleComment = function (id, obj) {
        return this._http.post('/deleteArticleComment/' + id, obj);
    };
    HttpService.prototype.updateUser = function (id, updateUser) {
        return this._http.put('/updateUser/' + id, updateUser);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/news-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/news-api.service.ts ***!
  \*************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        this.http = http;
        this.api_key = '59cad3670d7f4d0bb20903548220da5e';
    }
    NewsApiService.prototype.initSources = function () {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.initArticles = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticlesByID = function (source) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    };
    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
}());



/***/ }),

/***/ "./src/app/share/share.component.css":
/*!*******************************************!*\
  !*** ./src/app/share/share.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\ntextarea{\r\n\theight:;\r\n}\r\n\r\n.name{\r\n\twidth: 30%;\r\n\ttext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvc2hhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmUvc2hhcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcblx0aGVpZ2h0OjtcclxufVxyXG5cclxuLm5hbWV7XHJcblx0d2lkdGg6IDMwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/share/share.component.html":
/*!********************************************!*\
  !*** ./src/app/share/share.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table>\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Email</th>\r\n\t\t\t<th>Message</th>\r\n\t\t\t<th>Actions</th>\r\n\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\r\n\r\n\t\t<tr *ngFor = \"let user of users\">\r\n\r\n\r\n\t\t\t<td><input class = \"name\" type = \"text\" [(ngModel)] = \"user.first_name\">\r\n\t\t\t\t<input class = \"name\" type = \"text\" [(ngModel)] = \"user.last_name\">\r\n\r\n\t\t\t</td>\r\n\r\n\t\t\t<td><input type = \"text\" [(ngModel)] = \"user.email\"></td>\r\n\r\n\t\t\t<td><input type=\"text\" name=\"user.message\" [(ngModel)] = \"user.message\"></td>\r\n\r\n\t\t\t<td><button (click) = \"sendEmail(user)\">Send</button>\r\n\t\t\t\t<button (click) = \"updateUser(user)\">Update</button>\r\n\t\t\t\t<button (click)=\"deleteUser(user)\">Delete</button>\r\n\r\n\r\n\t\t\t</td>\r\n\r\n\t\t</tr>\r\n\r\n\r\n\t</tbody>\r\n</table>\r\n\r\n\r\n\r\n\r\n\r\n<!-- {{text | json}}\r\n-->\r\n<!-- [(ngModel)] = \"user.message\" -->"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/*!******************************************!*\
  !*** ./src/app/share/share.component.ts ***!
  \******************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShareComponent = /** @class */ (function () {
    function ShareComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.editedUser = {
            first_name: "",
            last_name: "",
            email: ""
        };
        this.text = {
            from: "",
            to: "",
            subject: "",
            text: "",
        };
        this.getUsers();
    };
    ShareComponent.prototype.sendEmail = function (user) {
        user['article'] = this.childShareVariable;
        var observable = this._httpService.sendEmail(user);
        observable.subscribe(function (data) {
        });
        this.text = {
            from: "",
            to: "",
            subject: "",
            text: "",
        };
        user['message'] = "";
    };
    ShareComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var observable = this._httpService.deleteUser(user._id);
        observable.subscribe(function (data) {
            _this.getUsers();
        });
    };
    ShareComponent.prototype.updateUser = function (object) {
        var _this = this;
        var observable = this._httpService.updateUser(object._id, object);
        observable.subscribe(function (data) {
            _this.getUsers();
        });
    };
    ShareComponent.prototype.getUsers = function () {
        var _this = this;
        var observable = this._httpService.getUsers();
        observable.subscribe(function (data) {
            _this.users = data['users'];
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                user['message'] = "";
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShareComponent.prototype, "childShareVariable", void 0);
    ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/share/share.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel Lam\Desktop\angular\tycheAngular\angular_app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map