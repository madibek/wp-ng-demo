import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css']
})

export class AppHome {

  public wpinfo = [];

  
  
  ngOnInit() {
  
    console.log('home');
  }
 

}
