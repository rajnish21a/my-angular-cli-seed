import {
  FormsModule
} from '@angular/forms';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HeroesComponent
} from './heroes.component';
import {
  HeroService
} from './hero.service';
import {
  AppComponent
} from './app.component';
import {
  HeroDetailsComponent
} from './hero-details/hero-details.component';
import {
  RouterModule
} from '@angular/router';
import {
  DashboardComponent
} from './dashboard.component';
import {
  AppRoutingModule
} from './app-routing.module';


@NgModule({

  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
