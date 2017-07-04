import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  template:`
    <nav class="navbar navbar-default navbar-fixed-bottom" id="sticky-footer">
      <div class="container-fluid">
        <div class="footer">
        <span>
          <h5 align="center">Thomas Rizzo
            <span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"> 2016</span></h5>
        </span>
        </div>
      </div>
    </nav>
  `,
  styles:[]
})

export class FooterNavComponent {}
