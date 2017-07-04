import { Component } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  template:`
    <nav class="navbar navbar-default navbar-static-top">
      <div class= "container-fluid" style="background-color:black; padding-top:10px">
        <h1 class="media media-middle" id="static-header">The Flame Paladin Saga</h1>
      </div>
    </nav>
  `,
  styles:[]

})

export class HeaderNavComponent {}
