import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavingsComponent } from './savings.component';

const savingsRoutes: Routes = [
  {
    path: ':path',
    component: SavingsComponent
  },
  {
    path: '',
    component: SavingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(savingsRoutes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule {

}
