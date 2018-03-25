import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app.settings';

@Injectable()

export class WpLinkService {

  constructor(private http:HttpClient) {}
 

 

  // Uses http.get() to load data from a single API endpoint

  getWpinfo(customApiLink) {

    let wpData = [];

    this.http.get(AppSettings.API_ENDPOINT+customApiLink).subscribe(data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          wpData.push(data[key]);
        }
      }
    
    })
    
    return wpData;
      
  }

}