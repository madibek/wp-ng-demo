import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PageComponent } from './page/page.component';
import { SinglePostComponent } from './singlepost/singlepost.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'instructions', component: PageComponent },
  { path: 'about', component: PageComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const routing = RouterModule.forRoot(appRoutes)