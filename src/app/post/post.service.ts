import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: any): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/`+id+`/`)
    .pipe(map(post => post));
  }

}
