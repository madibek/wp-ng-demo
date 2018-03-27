![Alt text](http://web.adamhammad.com/wp-content/uploads/2018/03/spliff-pc.jpg?raw=true "Screenshot")

# Spliff

This project is a headless Angular application that interfaces with the [WordPress REST API](https://developer.wordpress.org/rest-api/).

It's great for a skeleton app to build custom WordPress solutions on. This is a really good place to start for any developer, but I will continue to build on this to incorporate more features from the API.

## Installation

Download the zip or clone the Git.<br>
Run `npm install` in the application directory.<br>
Use `ng serve --open` to initialize the app.

## Configuration

In the file `app.settings.ts`, the variable API_ENDPOINT must be set.<br>
Is usually "DOMAIN"/wp-json/ e.g. 'http://yourdomain.com/wp-json/'.

Create new components for your content types using `ng g c component-name`.

Call the wp-link service into your new component.
`import { WpLinkService } from '../wp-link.service';`

You can request any REST API data by using the HTTP client and the function getWpinfo();

e.g. You have a custom post type 'Students', with the slug 'students':
  this.http.getWpinfo('wp/v2/students');
  
Feel free to use any existing component as a template for any new ones.

All the routing is done in 'app/router.module.ts'

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Contact

I can be contacted at adam@adamhammad.com

## Current Known Bugs

Navigation menu URLs not coming through the API correctly.
