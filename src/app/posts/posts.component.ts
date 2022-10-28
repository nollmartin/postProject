import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: [{
    userId: number,
    id: number,
    title: string,
    body: string
  }] | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }

  postDelete(id: number) {
    this.postsService.setPostDelete(id).subscribe(ret => {ret.status===200?this.RemoveElementFromObjectArray(id):false});
  }

  private RemoveElementFromObjectArray(i: number) {
    this.posts?.splice(i,1);
  }

}
