import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpLinkService } from '../wp-link.service';

import { AppSettings } from '../app.settings'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private http: WpLinkService) {}

  ngOnInit(): void {
    this.posts = this.http.getWpinfo('wp/v2/posts');
    console.log(this.posts);
  
  }

}
