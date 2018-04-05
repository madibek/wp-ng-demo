import { Component, OnInit } from '@angular/core';

import { Router  , ActivatedRoute } from '@angular/router';
import { WpLinkService } from '../wp-link.service';

@Component({
  selector: 'singlepost',
  templateUrl: './singlepost.component.html',
})
export class SinglePostComponent implements OnInit {

  singlepost = [];
  route = this.activeRoute.snapshot.params['id'];

  constructor(private http: WpLinkService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.singlepost = this.http.getWpinfo('wp/v2/posts?slug='+this.route);
    console.log(this.singlepost);
  }

}


