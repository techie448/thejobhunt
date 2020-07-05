import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from './job';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private firestore: AngularFirestore) { }

  getJobs(searchTerm?: string, lastKey?: Job): Observable<Job[]>{

return this.firestore.collection<Job>('jobs', (ref) => {

  if (lastKey && searchTerm) {
    return ref.where('keywords', 'array-contains', searchTerm)
      .orderBy('created', 'desc')
      .startAfter(lastKey.created)
      .limit(10);
  }else if (searchTerm){
    return ref.where('keywords', 'array-contains', searchTerm)
      .orderBy('created', 'desc')
      .limit(10);
  } else {
    return ref.orderBy('created', 'desc')
      .limit(10);
  }
}).valueChanges();
  }
}
