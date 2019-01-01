import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFilmComponent } from './components/create-film/create-film.component';
import { FilmsComponent } from './components/films/films.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CategoryComponent } from './components/category/category.component';
import { EditFilmsComponent } from './components/edit-films/edit-films.component';
//import { DelFilmComponent } from './components/del-film/del-film.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { DelCommentComponent } from './components/del-comment/del-comment.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { OneFilmComponent } from './components/one-film/one-film.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFilmComponent,
    FilmsComponent,
    CreateCategoryComponent,
    CategoryComponent,
    EditFilmsComponent,
    //DelFilmComponent,
    CreateCommentComponent,
    CommentComponent,
    DelCommentComponent,
    EditCategoryComponent,
    OneFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
