/**
 * New typescript file
 */

import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './navbar/home.component';
import { AboutComponent } from './navbar/about.component';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },

   {
        path: 'login',
        component: LoginComponent
    },
   {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'main',
        component: MainComponent
    },

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },


    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
