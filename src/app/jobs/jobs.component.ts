import { Component, OnInit } from '@angular/core';
import {JobService} from './shared/job.service';
import {Observable} from 'rxjs';
import {Job} from './shared/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs$: Observable<Job[]>;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {

    this.jobs$ = this.jobService.getJobs(10);
  }

}
