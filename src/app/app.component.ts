import { Component } from '@angular/core';

@Component({

  selector: 'my-app',
  template: `
    <app-header-nav></app-header-nav>

    <router-outlet></router-outlet>

    <app-footer-nav></app-footer-nav>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

}
