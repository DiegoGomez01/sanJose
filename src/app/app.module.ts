import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { GalleryModule } from  '@ngx-gallery/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForoComponent } from './foro/foro.component';
import { ProposeComponent } from './propose/propose.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ForoComponent,
    ProposeComponent,
    AboutUsComponent,
    SanJoseComponent,
    NeighborhoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
