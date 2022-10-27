import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{
  path: '',
  component: IndexComponent
},
{
  path: 'posts',
  loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
