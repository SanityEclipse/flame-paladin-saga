PurpleGemItem = function (index, game, x, y){
  this.purpleGem = game.add.sprite(x, y, 'portait');
  this.purpleGem.name = index.toString();
  game.physics.enable(this.purpleGem, Phaser.Physics.ARCADE);
  this.purpleGem.body.immovable = true;
  this.purpleGem.body.collideWorldBounds = true;
  this.purpleGem.body.allowGravity = false;
}

var item1;

Game.Level1 = function(game){}

var background;
var controls = {};
var count = 0;
var enterKey; //will be taken out of live version. Demo puposes only.
var facing;
var fireballs;
var jumpTimer = 0;
var mana = 10;
var map;
var player;
var playerSpeed = 500;
var portait;
var respawn;
var score = 0;
var shootTime = 0;
var text;
var text1;
var text2;

Game.Level1.prototype = {

  create: function (game) {

    this.camera.flash('#000000');

    background = this.add.image(0, 0, "Level_Bg");
    background.width = game.width;
    background.height = game.height;
    background.fixedToCamera = true;

    this.shoot = game.add.audio("fireball-sound");
    this.jumpSound = game.add.audio("jump-sound");
    this.select = game.add.audio("menu-select");

    this.physics.arcade.gravity.y = 1000;

    backgroundMusic = game.add.audio('level1');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    respawn = game.add.group();

    map = this.add.tilemap('myMap');
    map.addTilesetImage('tileset', 'tileset');

    backgroundLayer = map.createLayer("Background");
    blockedLayer = map.createLayer("Collision");
    objectLayer = map.createLayer("Object Layer 1")
    backgroundLayer.resizeWorld();

    map.setCollisionBetween(1, 1000, true, 'Collision');

    map.setTileIndexCallback(1105, this.getItem, this);
    map.setTileIndexCallback(1683, this.nextLevel, this, 'Collision');

    map.createFromObjects('Object Layer 1', 1382, '', 0, true, false, respawn); //spawn point

    player = this.add.sprite(0, 0, 'player');
    player.anchor.setTo(0.5, 0.5);
    this.spawn(); // spawn function is invoked on player object here

    player.animations.add('idle', [8, 9], 2, true);
    player.animations.add('jump', [15], 1, true);
    player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.add('shoot-fireball-right', [10, 11, 12, 13, 14], 20, false);
    player.animations.add('shoot-fireball-left', [10, 11, 12, 13, 14], 20, false);
    this.camera.follow(player);
    this.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    controls = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    }

    item1 = new PurpleGemItem(0, game, player.x + 100, player.y - 30);

    portait = this.add.sprite(10, 522, 'portait');
    portait.scale.x= 0.5;
    portait.scale.y= 0.5;
    portait.fixedToCamera = true;

    text = game.add.text(game.camera.x + 65, game.camera.y + 530, "Score: " + count, {
      font: '25px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    text1 = game.add.text(game.camera.x + 65, game.camera.y + 560, "Magic: ", {
      font: '25px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    text2 = game.add.text(game.camera.x + 240, game.camera.y + 560, mana, {
      font: '25px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    fireballsRight = game.add.group();
    fireballsRight.enableBody = true;
    fireballsRight.physicsBodyType = Phaser.Physics.ARCADE;
    fireballsRight.createMultiple(20, 'fire-right');
    fireballsRight.setAll('anchor.x', 0.7);
    fireballsRight.setAll('anchor.y', 0.7);
    fireballsRight.setAll('outOfBoundsKill', true);
    fireballsRight.setAll('checkWorldBounds', true);
    fireballsRight.setAll('body.allowGravity', false);
    fireballsRight.callAll('animations.add', 'animations', 'fire-right', [0, 1, 2, 3, 4], 5, true);
    fireballsRight.callAll('play', null, 'fireball-sound');

    fireballsLeft = game.add.group();
    fireballsLeft.enableBody = true;
    fireballsLeft.physicsBodyType = Phaser.Physics.ARCADE;
    fireballsLeft.createMultiple(20, 'fire-left');
    fireballsLeft.setAll('anchor.x', 0.7);
    fireballsLeft.setAll('anchor.y', 0.7);
    fireballsLeft.setAll('outOfBoundsKill', true);
    fireballsLeft.setAll('checkWorldBounds', true);
    fireballsLeft.setAll('body.allowGravity', false);
    fireballsLeft.callAll('animations.add', 'animations', 'fire-left', [0, 1, 2, 3, 4], 5, true);
    fireballsLeft.callAll('play', null, 'fireball-sound');

    text.fixedToCamera = true;
    text1.fixedToCamera = true;
    text2.fixedToCamera = true;

    // purpleGems = game.add.group();
    // purpleGems.enableBody = true;
    // purpleGems.physicsBodyType = Phaser.Physics.ARCADE;
    // this.purpleGems.body.allowGravity = false;
    // purpleGems.setAll('body.immovable', true);
    //
    // purpleGems.create(player.x + 50, player.y + -20, 'portait');
    // purpleGems.create(player.x + 100, player.y + -20, 'portait');


  },

  update: function (game) {

    this.physics.arcade.collide(player, blockedLayer);

    this.physics.arcade.collide(player, item1.purpleGem, this.collectPurpleGem);

    player.body.velocity.x = 0;

    if (controls.right.isDown) {
      if (player.body.onFloor() || player.body.touching.down) {
        player.animations.play('run');
      }
      player.scale.setTo(1, 1);
      player.body.velocity.x += playerSpeed;
      facing = 'right';

    }

    if (controls.left.isDown) {
      if (player.body.onFloor() || player.body.touching.down) {
        player.animations.play('run');
      }
      player.scale.setTo(-1, 1);
      player.body.velocity.x -= playerSpeed;
      facing = 'left';

    }

    if (controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer) {
      this.jumpSound.play()
      player.body.velocity.y = -800;
      jumpTimer = this.time.now + 800;
      player.animations.play('jump');

    }

    if (controls.shoot.isDown && facing == 'right' && mana > 0){
      this.shootFireballRight();
    }

    if (controls.shoot.isDown && facing == 'left' && mana > 0){
      this.shootFireballLeft();
    }

    if (player.body.velocity.x == 0 && player.body.velocity.y == 0 && !controls.shoot.isDown){
      player.animations.play('idle');
    }
    if (enterKey.isDown) {    //this will be removed from the live version.
        this.select.play();
        this.camera.flash('#000000');
        backgroundMusic.loop = false;
        backgroundMusic.stop();
        this.state.start('Endgame');
    }
    if (checkOverlap(player, item1.purpleGem)){
      item1.purpleGem.kill();
    }

  },



  spawn: function() {
    respawn.forEach(function(spawnPoint){
      player.reset(spawnPoint.x, spawnPoint.y);
    }, this);

  },

  nextLevel: function() {
    backgroundMusic.mute = true;

    this.state.start('Endgame', true, false);
  },

  getItem: function() {
    console.log("Purple Gem Touched")
    map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));
    // this.gold.play();
    // text.setText("Score:" + (count += 10));
  },

  shootFireballRight: function() {
    if (this.time.now > shootTime) {
      shootTime = this.time.now + 800;
      fireball = fireballsRight.getFirstExists(false);
      if (fireball) {
          this.shoot.play();
          fireball.reset(player.x, player.y);
          player.animations.play('shoot-fireball-right');
          fireball.body.velocity.x = 800;
          text2.setText(mana -= 1);
      }
    }
  },

  shootFireballLeft: function() {
    if (this.time.now > shootTime) {
      shootTime = this.time.now + 800;
      fireball = fireballsLeft.getFirstExists(false);
      if (fireball) {
          this.shoot.play();
          fireball.reset(player.x, player.y);
          player.animations.play('shoot-fireball-left');
          fireball.body.velocity.x = -800;
          text2.setText(mana -= 1);

      }
    }
  },

}
function checkOverlap(spriteA, spriteB) {
  if (spriteA.alive == false || spriteB.alive == false){
    return false
  }
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
