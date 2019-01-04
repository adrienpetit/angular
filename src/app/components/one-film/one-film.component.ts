import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films/films.service';
import { Films } from 'src/app/classes/films';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { Comment } from 'src/app/classes/comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-one-film',
  templateUrl: './one-film.component.html',
  styleUrls: ['./one-film.component.css']
})
export class OneFilmComponent implements OnInit {

films: Films;

comment: Comment;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private filmsService: FilmsService,
              private commentService: CommentService,
              private categoryService: CategoryService) { }

  ngOnInit() {
  	this.getFilm();
    //this.getComment();
    
  }
  //Get movie
  getFilm() {
    let id = this.route.snapshot.paramMap.get('id');
    this.filmsService.getFilm(id).subscribe(
      (data) => {
        this.films = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //Get comments
   getComment() {
   	let id = this.route.snapshot.paramMap.get('id');
    this.commentService.getComment(id).subscribe(
      (data) => {
        this.comment = data;
      },
      (err) => {
        console.log(err);
      }
    );
}


}
