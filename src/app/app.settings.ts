import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      BrowserModule,
    ],
  })

export class AppSettings {
    public static API_ENDPOINT='http://localhost:8888/wp-json/';
  }