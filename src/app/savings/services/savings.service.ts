import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Goal } from '../models/goal.model';
import { Month } from './../models/month.model';

@Injectable()
export class SavingsService {

  constructor(private firstore: AngularFirestore) { }

  update(path: String, goal: Goal, months: Month[]): Observable<void> {
    return from(
      this.firstore
        .doc('savings/' + path)
        .set({
          'amount': goal.amount,
          'currency': goal.currency,
          'months': goal.months,
          'starting-month': goal.startingMonth,
          'starting-year': goal.startingYear,
          'values': months.map(item => item.amount)
        }, { merge: true })
    );
  }
}
