import { Component, OnInit } from '@angular/core';
import {JobService} from './shared/job.service';
import {Job} from './shared/job';
import {ActivatedRoute} from '@angular/router';
import {AlgoliaService} from './shared/algolia.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];
  finished = false;
  args = { page : 0,
    query: undefined
  };
  constructor(private jobService: JobService, private route: ActivatedRoute, private algoliaService: AlgoliaService) { }
  async ngOnInit() {
    this.args.query = this.route.snapshot.paramMap.get('term') || undefined;
    this.algoliaService.init({ appId: 'KCCE701SC2', apiKey: '2464b23a99430e71701249738b33bdff' });
    const res = await this.algoliaService.fetchUsers(this.args);
    if ( res.hits.length < 1){
      this.finished = true;
    } else {
      this.jobs = res.hits as Job[];
    }
  }
  async onScroll() {
    if (!this.finished) {
      this.args.page += 1;
      const res = await this.algoliaService.fetchUsers(this.args);
      console.log(res.hits.length)
      if ( res.hits.length < 1){
        this.finished = true;
      } else {
        this.jobs = [...this.jobs, ...res.hits];
      }
    }
    }

}
