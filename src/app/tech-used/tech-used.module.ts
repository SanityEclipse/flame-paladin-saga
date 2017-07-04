import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechUsedComponent } from './tech-used.component';

import { TechUsedRoutingModule } from './tech-used-routing.module';

@NgModule({
  declarations: [ TechUsedComponent ],
  imports: [ CommonModule, TechUsedRoutingModule ],
  exports: [],
  providers: []
})

export class TechUsedModule {}
