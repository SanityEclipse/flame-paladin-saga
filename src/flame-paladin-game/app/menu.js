Game.Menu= function(game){}

var upKey;
var timer = 0;
var text;
var text2;
var text3;


Game.Menu.prototype = {

  create: function(game){

    backgroundMusic = game.add.audio('menu');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    this.select = game.add.audio("pressEnter");

    var style = {
      font: "28px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    var style2 = {
      font: "28px Press Start 2P", fill: "#99ccff", boundsAlignH: "center", boundsAlignV: "middle" };

    text = game.add.text(0, 0, "The Last Flame Paladin II", style);
    text.setTextBounds(0, 100, 800, 100);

    text2 = game.add.text(225, 500, "PRESS ENTER", style);

    text3 = game.add.text(215, 350, '-Demo Build-', style2);

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    },


  update: function(game) {

    timer += game.time.elapsed;
      if (timer >= 500) {
        timer -= 500;
        text2.visible = !text2.visible;
      }

      if (upKey.isDown) {
          this.select.play();
          this.state.start('Level1', true, false);
      }

    },

};
