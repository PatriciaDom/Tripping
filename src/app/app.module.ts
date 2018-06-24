import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './navbar/about.component';
import { HomeComponent } from './navbar/home.component';
import { routerConfig } from './mainComponent.config';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, LoginComponent, LogoutComponent, MainComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      routerConfig,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
