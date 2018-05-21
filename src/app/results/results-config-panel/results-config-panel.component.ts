import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { Config } from '../models/config.model';

@Component({
  selector: 'app-results-config-panel',
  templateUrl: './results-config-panel.component.html',
  styleUrls: ['./results-config-panel.component.scss']
})
export class ResultsConfigPanelComponent implements OnInit {

  @Input() amount = 36000;
  @Input() months = 12;
  @Input() startingMonth = new Date().getMonth();
  @Input() startingYear = new Date().getFullYear();
  @Input() currency = 'PLN';

  @Output() config = new EventEmitter<Config>();

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
