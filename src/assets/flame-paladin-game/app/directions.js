Game.Directions= function(game){}

var backgroundMusic;
var enterKey;
var text4;
var text5;
var text6;


Game.Directions.prototype = {

  create: function(game){

    backgroundMusic = game.add.audio('menu');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    this.select = game.add.audio("pressEnter");

    var style = {
      font: "28px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    var style2 = {
      font: "28px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    text4 = game.add.text(210, 100, "HOW TO PLAY", style);

    text5 = game.add.text(85, 200, '   A, W, D, = Move\nSpace bar = Fireball', style2);

    text6 = game.add.text(85, 480, "PRESS ENTER TO BEGIN", style);

    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    },


  update: function(game) {

      if (enterKey.isDown) {
          this.select.play();
          backgroundMusic.loop = false;
          backgroundMusic.stop();
          this.state.start('Level1');
      }

    },

};
