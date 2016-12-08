import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCanvasComponent }  from './game-canvas/game-canvas.component';
import { SiteLandingComponent } from './site-landing/site-landing.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/site-landing', pathMatch: 'full'},
  { path: 'game-canvas', component: GameCanvasComponent },
  { path: 'site-landing', component: SiteLandingComponent },
  { path: 'contact-info', component: ContactInfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
