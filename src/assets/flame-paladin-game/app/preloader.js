Game.Preloader = function(game) {

    this.preloadBar = null
};

Game.Preloader.prototype = {
    preload: function() {

      this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
      this.preloadBar.anchor.setTo(0.5, 0.5);
      this.time.advancedTiming = true;
      this.load.setPreloadSprite(this.preloadBar);

      this.load.tilemap('myMap', 'assets/flame-paladin-game/assets/maps/level1smaller.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.image('tileset', 'assets/flame-paladin-game/assets/images/world/reducedtileset.png');
      this.load.image('Level_Bg', 'assets/flame-paladin-game/assets/images/world/background.jpg');

      this.load.image('portait', 'assets/flame-paladin-game/assets/images/player/portait.png');
      this.load.spritesheet('player', 'assets/flame-paladin-game/assets/images/player/merged-paladin-small.png', 60, 96);
      this.load.spritesheet('fire-right', 'assets/flame-paladin-game/assets/images/player/fireball-right.png', 64, 64);
      this.load.spritesheet('fire-left', 'assets/flame-paladin-game/assets/images/player/fireball-left.png', 64, 64);
      this.load.spritesheet('big-fireball-collision', 'assets/flame-paladin-game/assets/images/player/big-fireball-collision.png', 48, 48);

      this.load.spritesheet('blue-gem', 'assets/flame-paladin-game/assets/images/items/blue-gem.png', 39, 39);
      this.load.spritesheet('red-gem', 'assets/flame-paladin-game/assets/images/items/red-gem.png', 39, 39);
      this.load.spritesheet('gold-key', 'assets/flame-paladin-game/assets/images/items/key-item.png', 46, 64);
      this.load.spritesheet('magic-beaker', 'assets/flame-paladin-game/assets/images/items/magic-beaker-item.png', 23, 31);

      this.load.spritesheet('bat', 'assets/flame-paladin-game/assets/images/enemies/bat-enemy.png', 64, 64);

      this.load.audio("menu", "assets/flame-paladin-game/assets/bg-music/Puzzle-Game-2.mp3");
      this.load.audio("level1", "assets/flame-paladin-game/assets/bg-music/Castle-of-Despair.mp3");
      this.load.audio("gameover", "assets/flame-paladin-game/assets/bg-music/Unpleasant-Discovery.mp3");

      this.load.audio("pressEnter", "assets/flame-paladin-game/assets/sound-effects/menu-select.mp3");
      this.load.audio("fireball-sound", "assets/flame-paladin-game/assets/sound-effects/fireball.mp3");
      this.load.audio("jump-sound", "assets/flame-paladin-game/assets/sound-effects/jump-sound.mp3");
      this.load.audio("pickup-item", "assets/flame-paladin-game/assets/sound-effects/pickup-item.mp3");
      this.load.audio("enemy-ignite", "assets/flame-paladin-game/assets/sound-effects/enemy-ignite.mp3");


    },

    create: function() {
      this.state.start('Menu');
    },

};
