import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent]
})
export class ResultsModule { }
