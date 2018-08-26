import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdowns',
  templateUrl: './countdowns.component.html',
  styleUrls: ['./countdowns.component.scss']
})
export class CountdownsComponent implements OnInit {

  imageClass: string | null;

  constructor() { }

  ngOnInit() {
    this.changeClassAfterDelay('expanded');
  }

  opacityForClass(className: string): number {
    return this.imageClass === className ? 1 : 0;
  }

  private changeClassAfterDelay(className: string | null) {
    setTimeout(() => {
      this.imageClass = className;
      this.changeClassAfterDelay(this.nextClass(className));
    }, 5000);
  }

  private nextClass(className: string | null): string | null {
    const classes = [null, 'expanded', 'preferences', 'preferences-expanded'];
    const index = classes.indexOf(className);
    if (index === classes.length - 1) {
      return null;
    } else {
      return classes[index + 1];
    }
  }

}
