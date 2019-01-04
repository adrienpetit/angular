import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films/films.service';
import { Films } from 'src/app/classes/films';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { Comment } from 'src/app/classes/comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-edit-films',
  templateUrl: './edit-films.component.html',
  styleUrls: ['./edit-films.component.css']
})
export class EditFilmsComponent implements OnInit {

  films: Films;
  categories: Category[];

  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private jeuService: FilmsService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getFilm();
    this.getCategories();
  }

  //Get movie
  getFilm() {
    let id = this.route.snapshot.paramMap.get('id');
    this.jeuService.getFilm(id).subscribe(
      (data) => {
        this.films = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //Get all categories
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

  //Edit movie
  onSubmit() {
    let newFilms = {
      'title': this.films.title,
      'content': this.films.content,
      'image': this.films.image,
      'category': this.films.category.id
    };

    if (newFilms.title !== undefined && newFilms.content !== undefined && newFilms.category !== undefined) {
      if (newFilms.title.length !== 0 && newFilms.content.length !== 0 && newFilms.category >= 0) {
        this.jeuService.putFilm(this.films.id, newFilms).subscribe(
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
