import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { Config } from './models/config.model';
import { Data } from './models/data.model';
import { Goal } from './models/goal.model';
import { Month } from './models/month.model';
import { Months } from './models/months.model';
import { SavingsDatagridComponent } from './savings-datagrid/savings-datagrid.component';
import { SavingsService } from './services/savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  @ViewChild('contentAreaTop') contentAreaTop: ElementRef;
  @ViewChild(SavingsDatagridComponent) datagrid: SavingsDatagridComponent;

  goal: Goal;
  months: Month[] = [];

  message: string = null;
  messageType = 'alert-info';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private savingsService: SavingsService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params['path'] === undefined) {
      this.router.navigate(['/', 'savings', uuid()]);
    }
    this.refresh(Config.default());
    this.loadData();
  }

  onConfigChange(config: Config) {
    this.refresh(config);
    this.onSave();
  }

  onSave() {
    this.scrollContentAreaToTop();

    this.message = 'Saving data...';
    const data = new Data(this.goal, this.months);

    this.savingsService.update(this.path(), data)
      .subscribe(
        () => {
          this.message = 'Data saved.';
          this.messageType = 'alert-info';
        },
        error => {
          this.message = error;
          this.messageType = 'alert-danger';
        }
      );
  }

  onShare() {
    this.savingsService.saveImage(this.datagrid.gridElement);
  }

  private loadData() {
    this.savingsService.load(this.path())
      .subscribe(
        data => {
          if (data === null) {
            this.message = 'Use side menu to configure your savings goal. Hit APPLY CHANGES when ready.';
            return;
          }
          this.goal = data.goal;
          this.months = data.months;
        },
        error => {
          this.message = error;
          this.messageType = 'alert-danger';
        }
      );
  }

  private path(): string {
    return this.route.snapshot.params['path'];
  }

  private refresh(config: Config) {
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
        const amount = this.months.length > index ? this.months[index].amount : null;
        return new Month(`${month} ${year}`, amount);
      });
  }

  private scrollContentAreaToTop() {
    this.contentAreaTop.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
