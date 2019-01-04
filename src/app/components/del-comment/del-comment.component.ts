import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del-comment',
  templateUrl: './del-comment.component.html',
  styleUrls: ['./del-comment.component.css']
})
export class DelCommentComponent implements OnInit {

comment: Comment[]
  constructor(
              private commentService: CommentService,
              private router: Router) { }

  ngOnInit() {
  }

  //Delete comment
   /*deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(
      (data) => {
        if (data.valid == true) {
          let i=0;
          for (i; i<this.comment.length; i++) {
            if (this.comment[i].id == id) {
              this.comment.splice(i, 1);
            }
          }

          console.log(this.comment);

          this.router.navigate(['/films']);
        }
        else{
          console.log("error");
        }
      }
    );
  }*/

}
