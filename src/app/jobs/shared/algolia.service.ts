import { Injectable } from '@angular/core';
import algoliasearch from 'algoliasearch';
@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {
  client: algoliasearch.Client;
  init(config: {
    appId: string,
    apiKey: string
  }) {
    this.client = algoliasearch(config.appId, config.apiKey);
  }

  fetchJobs(options: algoliasearch.QueryParameters) {
    const jobSearch = this.client.initIndex('thejobhunt');
    return jobSearch.search(options);
  }
}
