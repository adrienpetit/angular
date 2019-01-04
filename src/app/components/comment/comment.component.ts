import { Component, OnInit} from '@angular/core';
import { FilmsService } from 'src/app/services/films/films.service';
import { Router } from '@angular/router';
import { Films } from 'src/app/classes/films';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Comment } from 'src/app/classes/comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
show: boolean = false;
comment: Comment[];
  constructor(private commentService: CommentService,
              private router: Router) { }

  ngOnInit() {
  	//this.getComment();
  }
  //Get comment of a movie
   /*getComment() {
    this.commentService.getComments().subscribe(
      (data) => {
        this.comment = data;
      },
      (err) => {
        console.log(err);
      }
    );
	}*/
}
