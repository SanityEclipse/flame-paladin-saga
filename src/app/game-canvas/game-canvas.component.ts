import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Phaser from 'phaser';


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

export class GameCanvasComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {

    this.game = new Phaser.Game(725, 525, Phaser.AUTO,'game-renders-here');

    this.game.state.add('Boot', Game.Boot);
    this.game.state.add('Preloader', Game.Preloader);
    this.game.state.add('Menu', Game.Menu);
    this.game.state.add('Directions', Game.Directions);
    this.game.state.add('Level1', Game.Level1);
    this.game.state.add('Endgame', Game.Endgame);

    this.game.state.start('Boot');

  }

  ngOnDestroy() {

    this.game.destroy();
    console.log("ngOnDestroy");

  }

}
