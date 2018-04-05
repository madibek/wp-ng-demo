<p align=center>
  <img src="http://web.adamhammad.com/wp-content/uploads/2018/03/spliff-logo.png">
</p>

# Spliff

This project is a headless Angular application that interfaces with the WordPress REST API.

This is a really good place to start for any developer. It’s a skeleton app to build your own custom Angular/WordPress solutions on!

See it running at [spliff.adamhammad.com](http://spliff.adamhammad.com)

## Installation
#### Pre-requesites
* The latest version of [Node.js](http://nodejs.org) <br>
* [Angular CLI](https://angular.io) - npm install -g @angular/cli

Download the zip or clone the Git.<br>
Run `npm install` in the application directory.<br>
Configure Spliff in `app.settings.ts`<br>
Use `ng serve --open` to initialize the app.

## Configuration
In the file `app.settings.ts`, the variable <b>API_ENDPOINT</b> must be set.
Is usually `"DOMAIN"/wp-json/` e.g. `'http://yourdomain.com/wp-json/'`.

Create new components for your content types using ng g c component-name.

Call the wp-link service into your new component.<br>
`import { WpLinkService } from '../wp-link.service';`

You can request any REST API data by using the HTTP client and the function `getWpinfo();`

e.g. You have a custom post type <b>'Students'</b>, with the slug <b>'students'</b>: <br>
`this.http.getWpinfo('wp/v2/students');`

Feel free to use any existing component as a template for any new ones.

All the routing is done in `'app/router.module.ts'`

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.
