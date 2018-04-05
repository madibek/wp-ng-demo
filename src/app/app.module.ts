import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { WpLinkService } from './wp-link.service'
import { AppHome } from './app.home';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PageComponent } from './page/page.component';
import { SinglePostComponent } from './singlepost/singlepost.component';
import { CustomUrlSerializer } from './url.serial'

import { RouterModule, UrlSerializer } from '@angular/router';
import { routing } from './router.module';
import { NgStringPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppHome,
    PostsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    PageComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgStringPipesModule
  ],
  providers: [
    WpLinkService,
    RouterModule,

  ],
  bootstrap: [AppHome, NavbarComponent],
})
export class AppModule { }

