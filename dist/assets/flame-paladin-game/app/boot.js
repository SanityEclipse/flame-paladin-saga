var Game = {};

Game.Boot = function(game) {};

var scaleRatio = window.devicePixelRatio / 3;

Game.Boot.prototype = {
    init: function() {
        this.input.maxpointers = 1;
        this.stage.disableVisibityChange = true;
    },

    preload: function() {
        this.load.image('preloaderBar', 'assets/flame-paladin-game/assets/images/world/load-bar.png')
    },
    create: function() {

    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //
    // this.scale.pageAlignHorizontally = true;
    //
    // this.scale.pageAlignVertically = true;
    //
    // this.scale.setScreenSize(true);
    //
    // this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preloader')

    }
}
