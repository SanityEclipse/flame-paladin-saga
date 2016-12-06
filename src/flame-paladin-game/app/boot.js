var Game = {};

Game.Boot = function(game) {};

Game.Boot.prototype = {
    init: function() {
        this.input.maxpointers = 1;
        this.stage.disableVisibityChange = true;
    },

    preload: function() {
        this.load.image('preloaderBar', 'flame-paladin-game/assets/images/load-bar.png')
    },
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preloader')
    }
}
