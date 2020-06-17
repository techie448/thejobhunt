import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from './job';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private firestore: AngularFirestore) { }

  getJobs(count: number): Observable<Job[]>{

    return this.firestore
      .collection<Job>('jobs', ref => ref.limit(count))
      .valueChanges();

  }
}
