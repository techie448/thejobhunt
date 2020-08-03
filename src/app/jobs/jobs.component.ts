import { Component, OnInit } from '@angular/core';
import {JobService} from './shared/job.service';
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
  finished = false;
  args = { page : 0,
    query: undefined
  };
  constructor(private jobService: JobService, private route: ActivatedRoute,
              private router: Router, private algoliaService: AlgoliaService) { }
  async ngOnInit() {
    this.args.query = this.route.snapshot.paramMap.get('term') || undefined;
    this.algoliaService.init({ appId: 'PQEI9KMKMK', apiKey: '631c616dbbc48df795ae871c6e029fd9' });
    // this.algoliaService.init({ appId: 'KCCE701SC2', apiKey: '795223e6962f85bbb36cb4c7210d4c51' });
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
      if ( res.hits.length < 1){
        this.finished = true;
      } else {
        this.jobs = [...this.jobs, ...res.hits];
      }
    }
    }
    getURL(id: string){
    this.jobService.getJobUrl(id).subscribe((res) => {
      window.location.href = res.apply;
    });
    }

    formatDate(date: Date): string {
    return format(date);
    }
}
