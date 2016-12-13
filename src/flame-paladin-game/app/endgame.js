Game.Endgame = function(game){}

var backgroundMusic;
var score;
var text7;
var text8;
var text9;
var name= "";

Game.Endgame.prototype = {


  create: function(game){

      if (name === ""){
        name = "Name?";
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

    text7 = game.add.text(250, 100, "GAME OVER \n\n  " + name, style);

    text8 = game.add.text(100, 300, "Your final Score is " + score, style);

    text9 = game.add.text(250, 500, "PRESS ENTER", style);

    var myFunction = function(event) {

      text7.destroy();

      if (event.keyCode === 8 ){
        //BACKSPACE KEY
        name= name.slice(0, name.length-1);
      }
      else if( event.keyCode === 16){
        //SHIFT KEYS
      }

      else if (event.keyCode === 13){
        // ENTER KEY
        game.input.keyboard.onDownCallback = null;
        score = 0;
        this.select.play();
        backgroundMusic.loop = false;
        backgroundMusic.stop();
        this.nextLevel();
      }

      else {
        name += event.key;
      }

        text7 = game.add.text(250, 100, "GAME OVER \n\n  " + name, style);
    }

    game.input.keyboard.addCallbacks(this, myFunction);

    },

  update: function(game) {


    },
  nextLevel: function() {
      this.state.start('Boot', true, true);
    }

};
