import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [WelcomeComponent],
  exports: [
    WelcomeComponent
  ],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        FormsModule
    ]
})
export class WelcomeModule { }
