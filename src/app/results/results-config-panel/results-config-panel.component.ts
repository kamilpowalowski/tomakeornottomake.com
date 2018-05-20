import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-config-panel',
  templateUrl: './results-config-panel.component.html',
  styleUrls: ['./results-config-panel.component.scss']
})
export class ResultsConfigPanelComponent implements OnInit {

  amount = 36000;
  months = 12;
  startingMonth = 'January';
  currency = 'PLN';

  constructor() { }

  ngOnInit() {
  }

}
