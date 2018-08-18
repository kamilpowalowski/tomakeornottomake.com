import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CountdownsPolicyComponent } from './countdowns-policy/countdowns-policy.component';
import { CountdownsRoutingModule } from './countdowns-routing.module';
import { CountdownsTermsComponent } from './countdowns-terms/countdowns-terms.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    CountdownsRoutingModule
  ],
  declarations: [CountdownsTermsComponent, CountdownsPolicyComponent]
})
export class CountdownsModule { }
