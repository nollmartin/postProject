import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: [{
    userId: number;
    id: number;
    title: string;
    body: string;
  }] | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) {
   }

  ngOnInit(): void {
    this.postService.getPost(this.route.snapshot.paramMap.get('id')).subscribe(post => this.post = [post]);
  }

}
