import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashoardComponent } from './modules/dashoard/dashoard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashoardComponent,  
  }, {
    path: 'posts',
    component: PostsComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
