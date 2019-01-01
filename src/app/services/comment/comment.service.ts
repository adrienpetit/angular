import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from 'src/app/classes/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  /*getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + '/commentaire', { responseType: 'json' });
  }*/
  getComment(id: string): Observable<Comment> {
    return this.http.get<Comment>(this.url + '/commentaire/' + id, { responseType: 'json' });
  }
 

  postComment(id: number,Comment): Observable<any> {
    const httpOptions = { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Comment>(this.url + '/commentaires/' + id , Comment, httpOptions); 
  }
  deleteComment(id): Observable<any> {
    return this.http.delete(this.url +  '/comment/del/' + id)
  }

}
