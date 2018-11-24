import { ElementRef, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Data } from '../models/data.model';
import { Months } from '../models/months.model';
import { Goal } from './../models/goal.model';
import { Month } from './../models/month.model';

@Injectable()
export class SavingsService {

  constructor(private firstore: AngularFirestore) { }

  update(path: String, data: Data): Observable<void> {
    const goal = data.goal;
    const months = data.months.map(item => item.amount);

    return from(
      this.firstore
        .doc('savings/' + path)
        .set({
          'amount': goal.amount,
          'currency': goal.currency,
          'months': goal.months,
          'starting-month': goal.startingMonth,
          'starting-year': goal.startingYear,
          'values': months
        }, { merge: true })
    );
  }

  load(path: String): Observable<Data> {
    const ref = this.firstore.doc('savings/' + path);
    const source = from(ref.get());
    const mapped = source.pipe(map(snapshot => {
      if (!snapshot.exists) { return null; }
      const goal = new Goal(
        snapshot.get('amount'),
        snapshot.get('currency'),
        snapshot.get('months'),
        snapshot.get('starting-month'),
        snapshot.get('starting-year')
      );
      const values: number[] = snapshot.get('values');
      const months: Month[] = Array(goal.months)
        .fill(0)
        .map((_, index) => {
          const month = Months.values[(goal.startingMonth + index) % Months.values.length];
          const year = goal.startingYear + Math.floor((goal.startingMonth + index) / Months.values.length);
          const amount = values.length > index ? values[index] : null;

          return new Month(`${month} ${year}`, amount);
        });
      return new Data(goal, months);
    }));

    return mapped;
  }

  saveImage(element: ElementRef) {
    domtoimage.toBlob(element.nativeElement)
      .then(blob => {
        saveAs(blob, 'my-savings.png');
      });
  }
}
