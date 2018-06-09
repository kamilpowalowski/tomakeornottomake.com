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
    const config = new Config(
      this.amount,
      this.currency,
      this.months,
      +this.startingMonth,
      +this.startingYear
    );
    this.config.emit(config);
  }

}
