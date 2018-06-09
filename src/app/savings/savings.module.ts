import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SavingsConfigPanelComponent } from './savings-config-panel/savings-config-panel.component';
import { SavingsDatagridComponent } from './savings-datagrid/savings-datagrid.component';
import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent } from './savings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    SavingsRoutingModule
  ],
  declarations: [SavingsComponent, SavingsDatagridComponent, SavingsConfigPanelComponent]
})
export class SavingsModule { }
