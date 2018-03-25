import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'sample-page', component: PageComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes)
