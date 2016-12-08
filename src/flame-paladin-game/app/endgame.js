Game.Endgame = function(game){}

var backgroundMusic;
var enterKey;
var score;
var text7;
var text8;
var text9;
var name;

Game.Endgame.prototype = {


  create: function(game){
    name = prompt("Please enter your initials for the leaderboard", "");
      if (name === ""){
        name = "COM";
      }
      if (score === undefined){
        score = 0; 
      }

    backgroundMusic = game.add.audio('gameover');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    this.select = game.add.audio("pressEnter");

    var style = {
      font: "28px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    var style2 = {
      font: "28px Press Start 2P", fill: "#99ccff", boundsAlignH: "center", boundsAlignV: "middle" };

    text7 = game.add.text(250, 100, "Game Over, \n\n   " + name, style);

    text8 = game.add.text(100, 300, "Your final Score is " + score, style);

    text9 = game.add.text(250, 500, "PRESS ENTER", style);

    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);



    },


  update: function(game) {


      if (enterKey.isDown) {
          this.select.play();
          backgroundMusic.loop = false;
          backgroundMusic.stop();
          this.state.start('Menu');

      }

    },

};
