import { Component, OnInit } from '@angular/core';
import {Job} from './shared/job';
import {ActivatedRoute, Router} from '@angular/router';
import {AlgoliaService} from './shared/algolia.service';
import { format } from 'timeago.js';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];
  colors: string[] = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#0091EA', '#0097A7', '#009688', '#43A047', '#8D6E63', '#757575', '#78909C', '#F4511E', '#558B2F', '#827717', '#E65100'];
  finished = false;
  args = { page : 0,
    query: undefined
  };
  hits = 0;
  constructor(private route: ActivatedRoute,
              private router: Router, private algoliaService: AlgoliaService) { }
  async ngOnInit() {
    this.args.query = this.route.snapshot.paramMap.get('term') || undefined;
    this.algoliaService.init({ appId: 'XSO4PWDU11', apiKey: '7b982d1d4c2fd2f0c0b0b3a0fe90417f' });
    const res = await this.algoliaService.fetchJobs(this.args);
    this.hits = res.nbHits;
    if ( res.hits.length < 1){
      this.finished = true;
    } else {
      res.hits.forEach(job => job.title = job.title.replace(/<\/?[^>]+(>|$)/g, ''));
      this.jobs = res.hits as Job[];
    }
  }
  async onScroll() {
    if (!this.finished) {
      this.args.page += 1;
      const res = await this.algoliaService.fetchJobs(this.args);
      if ( res.hits.length < 1){
        res.hits.forEach(job => job.title = job.title.replace(/<\/?[^>]+(>|$)/g, ''));
        this.finished = true;
      } else {
        this.jobs = [...this.jobs, ...res.hits];
      }
    }
    }
    formatDate(date: Date): string {
    return format(date);
    }
}
