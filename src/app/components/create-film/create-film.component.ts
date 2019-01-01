import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/classes/films';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films/films.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { Comment } from 'src/app/classes/comment';
import { HttpClient } from '@angular/common/http';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {

  newFilms: Films;
  categories: Category[];
  
  

  constructor(private router: Router,
              private filmsService: FilmsService,
              private categoryService: CategoryService,
              
              private http: HttpClient) 
  { this.newFilms = new Films(); }

  ngOnInit() {
    this.getCategories();

  	 
  
  }
  
   getCategories() {
    this.categoryService.getCategorys().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
 

   onSubmit() {
     let newFilms = {
      'title': this.newFilms.title,
      'content': this.newFilms.content,
      'image': this.newFilms.image,
      'category': this.newFilms.category.id
    };
    if (newFilms.title !== undefined && newFilms.content !== undefined && newFilms.category !== undefined) {
      if (newFilms.title.length !== 0 && newFilms.content.length !== 0 && newFilms.category >= 0) {
        this.filmsService.postFilms(newFilms).subscribe(
          (data) => {
            if (data.valid === true) {
              this.router.navigate(['/films']);
            } else { document.getElementById('send-error').style.display = "block"; }
          }
        );
      } else { document.getElementById('form-error').style.display = "block"; }
    } else { document.getElementById('form-error').style.display = "block"; }
  }
}
