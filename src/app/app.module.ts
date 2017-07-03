import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';
import { CoreModule }        from './core/core.module';
import { GameLandingModule } from './game-landing/game-landing.module';

import { AppComponent }         from './app.component';
import { SiteLandingComponent } from './site-landing/site-landing.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TechUsedComponent }    from './tech-used/tech-used.component';

@NgModule({

  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    GameLandingModule
  ],
  declarations: [
    AppComponent,
    SiteLandingComponent,
    ContactInfoComponent,
    TechUsedComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
