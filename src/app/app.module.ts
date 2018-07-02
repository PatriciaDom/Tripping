import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AboutComponent } from './navbar/about.component';
import { HomeComponent } from './navbar/home.component';
import { routerConfig } from './appRouting.config';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { MainComponent } from './main/main.component';
import { TripService } from './trip.service';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, LoginComponent, LogoutComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(
      routerConfig,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TripService, PersonService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
