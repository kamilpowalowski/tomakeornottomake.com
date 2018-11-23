import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from './models/config.model';
import { Goal } from './models/goal.model';
import { Month } from './models/month.model';
import { Months } from './models/months.model';
import { SavingsService } from './services/savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  goal: Goal;
  months: Month[];

  message = 'Use side menu to configure your savings goal. Hit SAVE CHANGES when ready.';
  messageType = 'alert-info';


  constructor(
    private route: ActivatedRoute,
    private savingsService: SavingsService
  ) { }

  ngOnInit() {
    this.refreshConfig(Config.default());
  }

  onConfig(config: Config) {

    this.refreshConfig(config);

    this.savingsService.update(
      this.route.snapshot.params['path'],
      this.goal,
      this.months
    )
      .subscribe(
        () => {
          this.message = 'Data saved. Keep link to this page in bookmarks and don\'t share with anybody.';
          this.messageType = 'alert-info';
        },
        (error) => {
          this.message = error;
          this.messageType = 'alert-danger';
        }
      );
  }

  private refreshConfig(config: Config) {
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
