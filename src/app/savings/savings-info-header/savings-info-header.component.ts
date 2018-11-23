import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-info-header',
  templateUrl: './savings-info-header.component.html',
  styleUrls: ['./savings-info-header.component.scss']
})
export class SavingsInfoHeaderComponent implements OnInit {

  @Input() message: String;
  @Input() type: String;

  constructor() { }

  ngOnInit() {
  }

}
