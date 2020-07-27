import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from './job';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private firestore: AngularFirestore) { }

  getJobUrl(searchId: string): Observable<Job>{
    const doc = this.firestore.doc<Job>(`jobs/${searchId}`);
    return doc.valueChanges();
  }
}
