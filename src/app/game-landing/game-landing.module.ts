import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ScoreService } from './score.service'

import { GameLandingComponent } from './game-landing.component';
import { GameCanvasComponent } from '../game-canvas/game-canvas.component';

import { GameLandingRoutingModule } from './game-landing-routing.module';

@NgModule({
  declarations: [ GameLandingComponent, GameCanvasComponent ],
  exports: [],
  imports: [ CommonModule, GameLandingRoutingModule, HttpModule ],
  providers: [ ScoreService ]

})

export class GameLandingModule {

}
