Game.Preloader = function(game) {

    this.preloadBar = null
};

Game.Preloader.prototype = {
    preload: function() {

      this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
      this.preloadBar.anchor.setTo(0.5, 0.5);
      this.time.advancedTiming = true;
      this.load.setPreloadSprite(this.preloadBar);

      this.load.tilemap('myMap', 'flame-paladin-game/assets/maps/level1smaller.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.image('tileset', 'flame-paladin-game/assets/images/reducedtileset.png');

      this.load.image('Level_Bg', 'flame-paladin-game/assets/images/background.jpg');

      this.load.image('portait', 'flame-paladin-game/assets/images/portait.png');


      this.load.spritesheet('player', 'flame-paladin-game/assets/images/merged-paladin-small.png', 60, 96);
      this.load.spritesheet('fire-right', 'flame-paladin-game/assets/images/fireball-right.png', 64, 64);
      this.load.spritesheet('fire-left', 'flame-paladin-game/assets/images/fireball-left.png', 64, 64);
      this.load.spritesheet('blue-gem', 'flame-paladin-game/assets/images/blue-gem.png', 39, 39);
      this.load.spritesheet('red-gem', 'flame-paladin-game/assets/images/red-gem.png', 39, 39);
      this.load.spritesheet('gold-key', 'flame-paladin-game/assets/images/key-item.png', 46, 64)
      this.load.spritesheet('magic-beaker', 'flame-paladin-game/assets/images/magic-beaker-item.png', 23, 31)


      this.load.audio("menu", "flame-paladin-game/assets/bg-music/Puzzle-Game-2.mp3");
      this.load.audio("level1", "flame-paladin-game/assets/bg-music/Castle-of-Despair.mp3");
      this.load.audio("gameover", "flame-paladin-game/assets/bg-music/Unpleasant-Discovery.mp3");

      this.load.audio("pressEnter", "flame-paladin-game/assets/sound-effects/menu-select.mp3");
      this.load.audio("fireball-sound", "flame-paladin-game/assets/sound-effects/fireball.mp3");
      this.load.audio("jump-sound", "flame-paladin-game/assets/sound-effects/jump-sound.mp3");
      this.load.audio("pickup-item", "flame-paladin-game/assets/sound-effects/pickup-item.mp3");

    },

    create: function() {
      this.state.start('Menu');
    },

};
