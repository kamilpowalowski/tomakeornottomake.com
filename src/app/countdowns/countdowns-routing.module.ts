import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownsPolicyComponent } from './countdowns-policy/countdowns-policy.component';
import { CountdownsTermsComponent } from './countdowns-terms/countdowns-terms.component';

const countdownsRoutes: Routes = [
  {
    path: 'terms',
    component: CountdownsTermsComponent
  },
  {
    path: 'policy',
    component: CountdownsPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(countdownsRoutes)],
  exports: [RouterModule]
})
export class CountdownsRoutingModule {

}
