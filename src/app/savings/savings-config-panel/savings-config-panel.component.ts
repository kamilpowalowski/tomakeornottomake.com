import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { Config } from '../models/config.model';
import { Currencies } from './../models/currencies.model';

@Component({
  selector: 'app-savings-config-panel',
  templateUrl: './savings-config-panel.component.html',
  styleUrls: ['./savings-config-panel.component.scss']
})
export class SavingsConfigPanelComponent implements OnInit {

  @Input() amount = 36000;
  @Input() months = 12;
  @Input() startingMonth = new Date().getMonth();
  @Input() startingYear = new Date().getFullYear();
  @Input() currency = 'USD';

  @Output() config = new EventEmitter<Config>();

  currencies = Currencies.values.sort();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const amount = Math.max(1, this.amount);
    const months = Math.min(36, Math.max(1, this.months));
    const config = new Config(
      amount,
      this.currency,
      months,
      +this.startingMonth,
      +this.startingYear
    );
    this.config.emit(config);
  }

}
