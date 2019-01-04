import { Component, OnInit} from '@angular/core';
import { FilmsService } from 'src/app/services/films/films.service';
import { Router } from '@angular/router';
import { Films } from 'src/app/classes/films';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Films[]
  category: Category[];
  search: string = "All";
  constructor(private filmsService: FilmsService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
  	this.getFilms();
   
  
  }
  /*Get movies*/
   getFilms() {
    this.filmsService.getFilms().subscribe(
      (data) => {
        this.films = data;
      },
      (err) => {
        console.log(err);
      }
    );
  } 




 

  showAlert(id) {
    let display = document.getElementById(id).style.display;
    
    if (display == "block") { document.getElementById(id).style.display = "none"; }
    else { document.getElementById(id).style.display = "block"; }
  }
  /*Delete a movie*/
  deleteFilms(id) {
    this.filmsService.deleteFilm(id).subscribe(
      (data) => {
        if (data.valid == true) {
          let i=0;
          for (i; i<this.films.length; i++) {
            if (this.films[i].id == id) {
              this.films.splice(i, 1);
            }
          }

          console.log(this.films);

          this.router.navigate(['/films']);
        }
        else{
          console.log("error");
        }
      }
    );
  }

}
