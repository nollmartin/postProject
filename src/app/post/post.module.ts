import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [PostComponent],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
