import { Component, OnInit } from '@angular/core';

import { Router  , ActivatedRoute } from '@angular/router';
import { WpLinkService } from '../wp-link.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',

})
export class PageComponent implements OnInit {

  pages = [];
  route = this.activeRoute.snapshot.url;

  constructor(private http: WpLinkService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pages = this.http.getWpinfo('wp/v2/pages?slug='+this.route);
    console.log(this.pages);
  }

}

