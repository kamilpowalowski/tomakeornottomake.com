import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { ResultsDatagridComponent } from './results-datagrid/results-datagrid.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent, ResultsDatagridComponent]
})
export class ResultsModule { }
