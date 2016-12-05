Game.Menu= function(game){

}

Game.Menu.prototype = {

  create: function(game){
        var style = {
          font: "30px Press Start 2P", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
          text = game.add.text(0, 0, "The Last Flame Paladin II", style);
          text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
          text.setTextBounds(0, 100, 800, 100);

  },

  update: function(game) {

  },

};
