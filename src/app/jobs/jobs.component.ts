import { Component, OnInit } from '@angular/core';
import {JobService} from './shared/job.service';
import {Job} from './shared/job';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs$: Job[] = [];
  search: string;
  finished = false;

  constructor(private jobService: JobService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.search = this.route.snapshot.paramMap.get('term');
    this.jobService.getJobs(this.search).subscribe(r => {
      if ( r.length < 1){
        this.finished = true;
      } else {
        this.jobs$ = r;
      }
    });
  }

  onScroll(): void {
    if (!this.finished) {
      this.jobService.getJobs(this.search, this.jobs$[this.jobs$.length - 1])
        .subscribe(r => {
          if (r.length < 1) { this.finished = true; }
          return this.jobs$ = [...this.jobs$, ...r];
    });
    }
  }
}
