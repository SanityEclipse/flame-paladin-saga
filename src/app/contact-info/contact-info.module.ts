import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactInfoComponent } from './contact-info.component';

import { ContactInfoRoutingModule } from './contact-info-routing.module';

@NgModule({
  declarations: [ ContactInfoComponent ],
  imports: [ CommonModule, ContactInfoRoutingModule ],
  exports: [],
  providers: []
})

export class ContactInfoModule {}
