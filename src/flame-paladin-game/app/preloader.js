Game.Preloader = function(game) {

    this.preloadBar = null
};

Game.Preloader.prototype = {
    preload: function() {

      this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

      this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
      this.preloadBar.anchor.setTo(0.5, 0.5);
      this.time.advancedTiming = true;
      this.load.setPreloadSprite(this.preloadBar);

      this.load.audio("menu", "flame-paladin-game/assets/bg-music/Puzzle-Game-2.mp3");
      this.load.audio("level1", "flame-paladin-game/assets/bg-music/Castle-of-Despair.mp3");
      this.load.audio("gameover", "flame-paladin-game/assets/bg-music/Unpleasant-Discovery.mp3");

      this.load.audio("pressEnter", "flame-paladin-game/assets/sound-effects/menu-select.mp3")
    },

    create: function() {
      this.state.start('Menu', true, false);
    },

};
