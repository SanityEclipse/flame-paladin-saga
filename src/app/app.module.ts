import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { ContactInfoModule } from './contact-info/contact-info.module';
import { GameLandingModule } from './game-landing/game-landing.module';
import { SiteLandingModule } from './site-landing/site-landing.module';
import { TechUsedModule }    from './tech-used/tech-used.module';

import { CoreModule }        from './core/core.module';

import { AppComponent }         from './app.component';

import { AppRoutingModule }  from './app-routing.module';

@NgModule({

  imports: [
    BrowserModule,
    CoreModule,

    ContactInfoModule,
    GameLandingModule,
    SiteLandingModule,
    TechUsedModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
