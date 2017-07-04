import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactInfoComponent } from './contact-info.component';

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild([
    { path: 'contact-info', component: ContactInfoComponent }
  ])],
  providers: []
})

export class ContactInfoRoutingModule {}
