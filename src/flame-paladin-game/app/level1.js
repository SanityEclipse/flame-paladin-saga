Game.Level1 = function(game){}

var background;
var controls = {}; // basic controls implemented; mapped to 'D', 'A', 'W', and 'SPACEBAR'
var count = 0;
var facing;
var jumpTimer = 0;
// var blockedLayer;
// var backgroundlayer
var map;
var player;
var playerSpeed = 500; //adjusts player sprite movement in-game.
var portait;
var text; //needed to add in-game text

Game.Level1.prototype = {

  create: function (game) {

    background = this.add.image(0, 0, "Level_Bg");
    background.width = game.width;
    background.height = game.height;
    background.fixedToCamera = true;
    this.physics.arcade.gravity.y = 1400;

    map = this.add.tilemap('myMap');
    map.addTilesetImage('level1', 'tileset');

    backgroundLayer = map.createLayer("Background");
    blockedLayer = map.createLayer("Collision");

    map.setCollisionBetween(1, 1000, true, 'Collision');

    backgroundLayer.resizeWorld();

    player = this.add.sprite(100, 1000, 'player'); // (x starting point, y starting point, 'name string')
      player.anchor.setTo(0.5, 0.5); // sets anchor to the center of the sprite

      // ('name of animation sequence', [frames to be played], FPS, numeric index boolean)
      player.animations.add('idle', [8, 9, 10], 2, true);
      player.animations.add('jump', [0], 1, true);
      player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
      this.camera.follow(player); // camera will remained focused on player
      this.physics.arcade.enable(player); //enables arcade physics on the player
      player.body.collideWorldBounds = true; // prevents player from falling out of the canvas

      controls = {
        right: this.input.keyboard.addKey(Phaser.Keyboard.D),
        left: this.input.keyboard.addKey(Phaser.Keyboard.A),
        up: this.input.keyboard.addKey(Phaser.Keyboard.W),
        shoot: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR) //unassigned
      }
      portait = this.add.sprite(10, 522, 'portait');
      portait.scale.x= 0.5;
      portait.scale.y= 0.5;

      portait.fixedToCamera = true;

      text = game.add.text(game.camera.x + 65, game.camera.y + 550, count, {
        font: '25px Press Start 2P',
        fill: '#ffffff',
        align: 'center'
      });

      text.fixedToCamera = true;

  },

  update: function (game) {

    this.physics.arcade.collide(player, blockedLayer);

    player.body.velocity.x = 0;

    if (controls.right.isDown) {
      player.animations.play('run');
      player.scale.setTo(1, 1);
      player.body.velocity.x += playerSpeed;
      facing = 'right';

    }

    if (controls.left.isDown) {
      player.animations.play('run');
      player.scale.setTo(-1, 1);
      player.body.velocity.x -= playerSpeed;
      facing = 'left';

    }

    if (controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer) {
      player.body.velocity.y = -700;
      jumpTimer = this.time.now + 750;
      player.animations.play('jump');


    }

    if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
      player.animations.play('idle');

    }

  },

}
