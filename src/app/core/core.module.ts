import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HeaderNavComponent } from './header-nav.component';
import { FooterNavComponent } from './footer-nav.component';

@NgModule({
  declarations: [ HeaderNavComponent, FooterNavComponent ],
  exports: [ HeaderNavComponent, FooterNavComponent ],
  imports: [ CommonModule ],
  providers: []
})

export class CoreModule {

}
