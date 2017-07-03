import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLandingComponent } from './game-landing/game-landing.component';
import { SiteLandingComponent } from './site-landing/site-landing.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TechUsedComponent }    from './tech-used/tech-used.component';

const routes: Routes = [
  { path: '', redirectTo: '/site-landing', pathMatch: 'full'},
  { path: 'game-landing', component: GameLandingComponent },
  { path: 'site-landing', component: SiteLandingComponent },
  { path: 'contact-info', component: ContactInfoComponent },
  { path: 'tech-used', component: TechUsedComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
