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

  fetchUsers(options: algoliasearch.QueryParameters) {
    const userSearch = this.client.initIndex('thejobhunt');
    return userSearch.search(options);
  }
}
