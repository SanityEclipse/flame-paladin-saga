import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLandingComponent } from './site-landing.component';

import { SiteLandingRoutingModule } from './site-landing-routing.module'; 

@NgModule({
  declarations: [ SiteLandingComponent ],
  exports: [],
  imports: [ CommonModule, SiteLandingRoutingModule ],
  providers: []

})

export class SiteLandingModule {

}
