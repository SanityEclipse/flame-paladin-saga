import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameLandingComponent } from './game-landing/game-landing.component';
import { SiteLandingComponent } from './site-landing/site-landing.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TechUsedComponent } from './tech-used/tech-used.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
import { ScoreService }  from './score.service';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GameLandingComponent,
    SiteLandingComponent,
    ContactInfoComponent,
    TechUsedComponent,
    GameCanvasComponent,
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
