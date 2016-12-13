import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-canvas',
  template: `
  <div class = 'container'>
    <div>
      <div id="game-renders-here"></div>
    </div>
  </div>
  `,
  styleUrls: ['./game-canvas.component.css']
})

export class GameCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

        window.onload = function() {
          var game = new Phaser.Game(
            725, 525,
            Phaser.AUTO,
            'game-renders-here');

          game.state.add('Boot', Game.Boot);
          game.state.add('Preloader', Game.Preloader);
          game.state.add('Menu', Game.Menu);
          game.state.add('Directions', Game.Directions);
          game.state.add('Level1', Game.Level1);
          game.state.add('Endgame', Game.Endgame);

          game.state.start('Boot');

    }
  }
}
