import { Component, OnInit} from '@angular/core';
import { FilmsService } from 'src/app/services/films/films.service';
import { Router } from '@angular/router';
import { Films } from 'src/app/classes/films';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

category: Category[];
search: string = "All";

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
  	 this.getCategories();
  }
   getCategories() {
    this.categoryService.getCategorys().subscribe(
      (data) => {
        this.category = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
   showAlert(id) {
    /* Function to display the selector to confirm the deletion */
    let display = document.getElementById(id).style.display;
    
    if (display == "block") { document.getElementById(id).style.display = "none"; }
    else { document.getElementById(id).style.display = "block"; }
  }

}
