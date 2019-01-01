import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { FilmsComponent } from './components/films/films.component';
import { EditFilmsComponent } from './components/edit-films/edit-films.component';
import { CreateFilmComponent } from './components/create-film/create-film.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { OneFilmComponent } from './components/one-film/one-film.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';


const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'newCategory', component: CreateCategoryComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'Editfilms/:id', component: EditFilmsComponent },
  { path: 'newfilm', component: CreateFilmComponent },
  { path: 'newcomment/:id', component: CreateCommentComponent },
  { path: 'film/:id', component: OneFilmComponent },
  { path: 'updateCategory/:id', component: EditCategoryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
