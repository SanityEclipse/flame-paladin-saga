Game.Preloader = function(game) {

    this.preloadBar = null
};

Game.Preloader.prototype = {
    preload: function() {

      this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
      this.preloadBar.anchor.setTo(0.5, 0.5);
      this.time.advancedTiming = true;
      this.load.setPreloadSprite(this.preloadBar);

      this.load.tilemap('myMap', 'flame-paladin-game/assets/maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.image('tileset', 'flame-paladin-game/assets/images/tileset.png');

      this.load.image('Level_Bg', 'flame-paladin-game/assets/images/background.jpg');

      this.load.image('portait', 'flame-paladin-game/assets/images/portait.png');


      this.load.spritesheet('player', 'flame-paladin-game/assets/images/merged-paladin-1.png', 80, 128);
      this.load.spritesheet('fire-right', 'flame-paladin-game/assets/images/fireball-right.png', 64, 64)
      this.load.spritesheet('fire-left', 'flame-paladin-game/assets/images/fireball-left.png', 64, 64)


      this.load.audio("menu", "flame-paladin-game/assets/bg-music/Puzzle-Game-2.mp3");
      this.load.audio("level1", "flame-paladin-game/assets/bg-music/Castle-of-Despair.mp3");
      this.load.audio("gameover", "flame-paladin-game/assets/bg-music/Unpleasant-Discovery.mp3");

      this.load.audio("pressEnter", "flame-paladin-game/assets/sound-effects/menu-select.mp3");
      this.load.audio("fireball-sound", "flame-paladin-game/assets/sound-effects/fireball.mp3");
    },

    create: function() {
      this.state.start('Menu');
    },

};
