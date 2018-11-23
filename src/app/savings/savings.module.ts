import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SavingsConfigPanelComponent } from './savings-config-panel/savings-config-panel.component';
import { SavingsDatagridComponent } from './savings-datagrid/savings-datagrid.component';
import { SavingsInfoHeaderComponent } from './savings-info-header/savings-info-header.component';
import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent } from './savings.component';
import { SavingsService } from './services/savings.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    AngularFirestoreModule,
    SavingsRoutingModule
  ],
  declarations: [SavingsComponent, SavingsDatagridComponent, SavingsConfigPanelComponent, SavingsInfoHeaderComponent],
  providers: [SavingsService]
})
export class SavingsModule { }
