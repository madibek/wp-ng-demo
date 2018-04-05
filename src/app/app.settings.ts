import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      BrowserModule,
    ],
  })

/*

   _____       ___ ________
  / ___/____  / (_) __/ __/
  \__ \/ __ \/ / / /_/ /_  
 ___/ / /_/ / / / __/ __/  
/____/ .___/_/_/_/ /_/     
    /_/                    

  Spliff 0.1 by Adam Hammad 2018
  http://www.adamhammad.com
  
  Application Settings
  - API_ENDPOINT: WordPress API URL
    
  It's generally your URL with /wp-json/ at the end.
  e.g.
  http://yourdomain.com/wp-json/

  The trailing / is important, as the service is set up
  to receive a URL with that on the end.

*/

export class AppSettings {

    public static API_ENDPOINT='http://spliff.adamhammad.com/admin/wp-json/';

  }