import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ResultsConfigPanelComponent } from './results-config-panel/results-config-panel.component';
import { ResultsDatagridComponent } from './results-datagrid/results-datagrid.component';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent, ResultsDatagridComponent, ResultsConfigPanelComponent]
})
export class ResultsModule { }
