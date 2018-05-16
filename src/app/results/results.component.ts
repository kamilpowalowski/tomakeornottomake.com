import { Month } from './models/month.model';
import { Component, OnInit } from '@angular/core';
import { Goal } from './models/goal.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  goal = new Goal(36000, 12);

  months = [
    new Month('January', 2326.97),
    new Month('February', 2100),
    new Month('March', 1900),
    new Month('April', 1989.09),
    new Month('May', 500),
    new Month('June', null),
    new Month('July', null),
    new Month('August', null),
    new Month('September', null),
    new Month('October', null),
    new Month('November', null),
    new Month('December', null)
  ];

  constructor() { }

  ngOnInit() {
  }

}
