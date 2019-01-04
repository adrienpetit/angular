import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/classes/films';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films/films.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { Comment } from 'src/app/classes/comment';
import { HttpClient } from '@angular/common/http';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
newComment: Comment;
films : Films;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private filmsService: FilmsService,
              private commentService: CommentService,
              private categoryService: CategoryService) { 
    this.newComment = new Comment(); }

  ngOnInit() {
    this.getFilm();
  }
  //Get a movie
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
  //Create a comment for a movie
  onSubmit(){
  if (this.newComment.author !== undefined && this.newComment.content !== undefined) {

      if (this.newComment.author.length !== 0 && this.newComment.content.length !== 0) {
        this.commentService.postComment( this.newComment.id, this.newComment).subscribe(
          (data) => {
            if (data.valid == true) {
              this.router.navigate(['/films']);
            }
            else { document.getElementById('send-error').style.display = "block"; }
          }
        );
      } else { document.getElementById('form-error').style.display = "block"; }
    } else { document.getElementById('form-error').style.display = "block"; }
  }

}
