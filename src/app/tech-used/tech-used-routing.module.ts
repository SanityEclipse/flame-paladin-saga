import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TechUsedComponent } from './tech-used.component';

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild([
    { path: 'tech-used', component: TechUsedComponent }
  ])],
  providers: []
})

export class TechUsedRoutingModule {}
