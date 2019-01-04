import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service'
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

 categories: Category;
 
  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
  this.getCategory();
  }
//Get a category
  getCategory() {
    let id = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

 
  //Edit category
  onSubmit() {
    

    if (this.categories.title.length !== 0 && this.categories.description.length !== 0) {
      this.categoryService.putCategory(this.categories.id, this.categories).subscribe(
        (data) => {
          if (data.valid === true) {
            this.router.navigate(['/categories']);
          } else { document.getElementById('send-error').style.display = "block"; }
        }
      );
    } else { document.getElementById('form-error').style.display = "block"; }
  }


}
