import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/`)
    .pipe(
      map(posts => posts
        .filter((post: { id: number; }) => {
          return( post.id <= 10 ? true : false )
        })
      )
    );
  }

  setPostDelete(id: any): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/`+id+`/`, {params: {method: 'DELETE'}, observe: 'response'})
    .pipe(map(ret => ret));
  }

}
