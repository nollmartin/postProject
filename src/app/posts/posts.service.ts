import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
}
