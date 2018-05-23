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

  goal: Goal;

  months: Month[];

  constructor() { }

  ngOnInit() {
    this.onConfig(Config.default());
  }

  onConfig(config: Config) {
    const startingMonth = config.startingMonth;
    const startingYear = config.startingYear;

    this.goal = new Goal(
      config.amount,
      config.currency,
      config.months,
      config.startingMonth,
      config.startingYear
    );

    this.months = Array(config.months)
      .fill(0)
      .map((_, index) => {
        const month = Months.values[(startingMonth + index) % Months.values.length];
        const year = startingYear + Math.floor((startingMonth + index) / Months.values.length);
        return new Month(`${month} ${year}`, null);
      });
  }

}
