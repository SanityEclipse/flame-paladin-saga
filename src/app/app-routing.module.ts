import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { SiteLandingComponent} from './site-landing/site-landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/site-landing', pathMatch: 'full'},
  { path: 'game-canvas', component: GameCanvasComponent },
  { path: 'site-landing', component: SiteLandingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
