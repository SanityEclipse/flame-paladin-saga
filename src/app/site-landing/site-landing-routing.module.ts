import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteLandingComponent } from './site-landing.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'site-landing', component: SiteLandingComponent }
  ])],
  exports: [ RouterModule ],
})

export class SiteLandingRoutingModule {}
