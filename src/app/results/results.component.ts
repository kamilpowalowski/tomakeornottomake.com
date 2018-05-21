import { Component, OnInit } from '@angular/core';
import { Config } from './models/config.model';
import { Goal } from './models/goal.model';
import { Month } from './models/month.model';
import { Months } from './models/months.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  goal = new Goal(36000, 'PLN', 12);

  months = [
    new Month('January 2018', 2326.97),
    new Month('February 2018', 2100),
    new Month('March 2018', 1900),
    new Month('April 2018', 1989.09),
    new Month('May 2018', 500),
    new Month('June 2018', null),
    new Month('July 2018', null),
    new Month('August 2018', null),
    new Month('September 2018', null),
    new Month('October 2018', null),
    new Month('November 2018', null),
    new Month('December 2018', null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onConfig(config: Config) {
    this.goal = new Goal(config.amount, config.currency, config.months);
    const startingMonth = config.startingMonth;
    const startingYear = config.startingYear;
    this.months = Array(config.months)
    .fill(0)
    .map((_, index) => {
      const month = Months.values[(startingMonth + index) % Months.values.length];
      const year = startingYear + Math.floor((startingMonth + index) / Months.values.length);
      return new Month(`${month} ${year}`, null);
    });
  }

}
