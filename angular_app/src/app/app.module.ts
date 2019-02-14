import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {NgPipesModule} from 'ngx-pipes';
import { CommentComponent } from './comment/comment.component';
import { ShareComponent } from './share/share.component';
import { ChatroomComponent } from './chatroom/chatroom.component';


@NgModule({
  declarations: [
    AppComponent,

    CommentComponent,

    ShareComponent,

    ChatroomComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [HttpService,NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }






