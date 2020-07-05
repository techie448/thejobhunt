import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import {FormsModule} from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [JobsComponent],
    imports: [
        CommonModule,
        JobsRoutingModule,
        FormsModule,
        InfiniteScrollModule
    ]
})
export class JobsModule { }
