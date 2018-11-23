import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { SavingsComponent } from './savings.component';

const savingsRoutes: Routes = [
  {
    path: ':path',
    component: SavingsComponent
  },
  {
    path: '',
    redirectTo: uuid()
  }
];

@NgModule({
  imports: [RouterModule.forChild(savingsRoutes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule {

}
