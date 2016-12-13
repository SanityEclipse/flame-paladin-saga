import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-canvas',
  template: `
  <div id="game-renders-here"></div>
  `,
  styleUrls: ['./game-canvas.component.css']
})

export class GameCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

        window.onload = function() {
          var game = new Phaser.Game(
            800, 600,
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
