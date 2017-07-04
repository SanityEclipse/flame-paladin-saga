import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameLandingComponent } from './game-landing.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'game-landing', component: GameLandingComponent }
  ])],
  exports: [ RouterModule ],
})

export class GameLandingRoutingModule {

}
