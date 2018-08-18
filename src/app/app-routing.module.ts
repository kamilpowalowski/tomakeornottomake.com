import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'savings',
    loadChildren: './savings/savings.module#SavingsModule'
  },
  {
    path: 'countdowns',
    loadChildren: './countdowns/countdowns.module#CountdownsModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
