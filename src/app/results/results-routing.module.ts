import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';

const resultsRoutes: Routes = [
  {
    path: '',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(resultsRoutes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule {

}
