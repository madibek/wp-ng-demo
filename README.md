# Spliff

This project is a headless Angular application that interfaces with the WordPress REST API.

It's great for a skeleton app the build custom Wordpress solutions on. This is a really good place to start for any developer, but I will continue to build on this to incorporate more functions from the API.

## Installation

Download the zip or clone the Git.
Run `npm install` in the application directory.
Use `ng serve --open` to initialize the app.

## Configuration

Create new components for your content types using `ng g c component-name`.

Call the wp-link service into your new component.
`import { WpLinkService } from '../wp-link.service';`
Look at other existing components to see the service usage.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Contact

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Current Known Bugs

Navigation menu URLs not coming through the API correctly.
