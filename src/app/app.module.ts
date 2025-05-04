 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { AppComponent } from './app.component';
 import {PublicModule} from './public/public.module';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NgAisModule } from 'angular-instantsearch';

 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PublicModule,
    BrowserAnimationsModule,
    NgAisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
