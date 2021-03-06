import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Films } from 'src/app/classes/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

private url = "http://localhost:8000/api";

  constructor(private http: HttpClient) 
  {

  }
  //Get all movies
  getFilms(): Observable<Films[]> {
    return this.http.get<Films[]>(this.url + '/index', { responseType: 'json' });
  }
//Get a movie
  getFilm(id: string): Observable<Films> {
    return this.http.get<Films>(this.url + '/film/' + id, { responseType: 'json' });
  }
//Edit movie
  putFilm(id: number, films): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.url + '/film/edit/' + id, films, httpOptions)
  }
//Create a new movie
  postFilms(films): Observable<any> {
    const httpOptions = { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Films>(this.url + '/form', films, httpOptions);
  }
  //Delete movie
  deleteFilm(id): Observable<any> {
    return this.http.delete(this.url +  '/film/del/' + id)
  }
}
