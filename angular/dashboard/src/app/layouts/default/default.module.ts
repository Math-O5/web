import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatSidenavModule, MatDividerModule } from '@angular/material';
import { DefaultComponent } from './default.component';
import { DashoardComponent } from 'src/app/modules/dashoard/dashoard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashoardComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
  ]
})
export class DefaultModule { }
