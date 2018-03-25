import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpLinkService } from '../wp-link.service';

import { AppSettings } from '../app.settings'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar = [];

  constructor(private http: WpLinkService) {}

  ngOnInit():void {
    this.navbar = this.http.getWpinfo('menus/v2/header-menu');
    console.log(this.navbar);

   
  }

} 