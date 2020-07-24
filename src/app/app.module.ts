 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { AppComponent } from './app.component';
 import {AngularFireModule} from '@angular/fire';
 import {environment} from '../environments/environment';
 import {AngularFirestoreModule} from '@angular/fire/firestore';
 import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
 import {PublicModule} from './public/public.module';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NgAisModule } from 'angular-instantsearch';

 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    PublicModule,
    BrowserAnimationsModule,
    NgAisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
