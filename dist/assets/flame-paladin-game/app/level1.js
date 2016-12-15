Enemybat = function(index, game, x, y) {
  this.bat = game.add.sprite(x, y, 'bat');
  this.bat.anchor.setTo(0.5, 0.5);
  this.bat.name = index.toString();
  game.physics.enable(this.bat, Phaser.Physics.ARCADE);
  this.bat.body.immovable = true;
  this.bat.body.collideWorldBounds = true;
  this.bat.body.allowGravity = false;
  this.batTween = game.add.tween(this.bat).to({
      y: this.bat.y + 100
  }, 1000, 'Linear', true, 0, -1, true);
  this.bat.body.setSize(this.bat.width * 1 / 4, this.bat.height * 1 / 2)
  this.bat.animations.add('fly', [0, 1, 2, 3, 4, 5], 7, true);
  this.bat.animations.add('death' [6, 7, 8, 9, 10], 10, false);
  this.bat.animations.play('fly', 7, true);
},

BlueGemItem = function (index, game, x, y) {
  this.blueGem = game.add.sprite(x, y, 'blue-gem');
  this.blueGem.name = index.toString();
  game.physics.enable(this.blueGem, Phaser.Physics.ARCADE);
  this.blueGem.body.immovable = false;
  this.blueGem.body.collideWorldBounds = true;
  this.blueGem.body.allowGravity = false;
  this.blueGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
  this.blueGem.animations.play('shimmer', 5, true);
},

RedGemItem = function (index, game, x, y) {
  this.redGem = game.add.sprite(x, y, 'red-gem');
  this.redGem.name = index.toString();
  game.physics.enable(this.redGem, Phaser.Physics.ARCADE);
  this.redGem.body.immovable = false;
  this.redGem.body.collideWorldBounds = true;
  this.redGem.body.allowGravity = false;
  this.redGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
  this.redGem.animations.play('shimmer', 5, true);
},

GoldKeyItem = function (index, game, x, y) {
  this.goldKey = game.add.sprite(x, y, 'gold-key');
  this.goldKey.name = index.toString();
  game.physics.enable(this.goldKey, Phaser.Physics.ARCADE);
  this.goldKey.body.immovable = false;
  this.goldKey.body.collideWorldBounds = true;
  this.goldKey.body.allowGravity = false;
  this.goldKey.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
  this.goldKey.animations.play('shimmer', 5, true);
},

MagicBeakerItem = function (index, game, x, y) {
  this.magicBeaker = game.add.sprite(x, y, 'magic-beaker');
  this.magicBeaker.name = index.toString();
  game.physics.enable(this.magicBeaker, Phaser.Physics.ARCADE);
  this.magicBeaker.body.immovable = false;
  this.magicBeaker.body.collideWorldBounds = true;
  this.magicBeaker.body.allowGravity = false;
  this.magicBeaker.animations.add('shimmer', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true);
  this.magicBeaker.animations.play('shimmer', 5, true);
}

var enemy0;
var enemy1;

Game.Level1 = function(game){}

var controls = {};
var enterKey; //will be taken out of live version. Demo puposes only.
var fireballCollisions;
var facing = 'right';
var fireballs;
// var fireballCollision;
var health = 10;
var jumpTimer = 0;
var key = 0;
var mana = 10;
var map;
var player;
var playerSpeed = 400;
var respawn;
var score = 0;
var shootTime = 0;
var text0;
var text1;
var text2;
var text3;


Game.Level1.prototype = {

  create: function (game) {


    this.camera.flash('#000000');

    var background = this.add.image(0, 0, "Level_Bg");
        background.width = game.width;
        background.height = game.height;
        background.fixedToCamera = true;

    this.shoot = game.add.audio("fireball-sound");
    this.jumpSound = game.add.audio("jump-sound");
    this.select = game.add.audio("menu-select");
    this.pickupItem = game.add.audio("pickup-item")
    this.enemyIgnite = game.add.audio("enemy-ignite");

    this.physics.arcade.gravity.y = 1400;

    backgroundMusic = game.add.audio('level1');
    backgroundMusic.loop = true;
    backgroundMusic.play();

    respawn = game.add.group();

    map = this.add.tilemap('myMap');
    map.addTilesetImage('reducedtileset', 'tileset');

    backgroundLayer = map.createLayer("Background");
    blockedLayer = map.createLayer("Collision");
    objectLayer = map.createLayer("Object Layer 1")
    backgroundLayer.resizeWorld();

    map.setCollisionBetween(1, 1100, true, 'Collision');

    map.setTileIndexCallback(1683, this.nextLevel, this, 'Collision');

    map.createFromObjects('Object Layer 1', 1, '', 0, true, false, respawn); //spawn point

    player = this.add.sprite(0, 0, 'player');
    player.anchor.setTo(0.5, 0.5);
    this.spawn(); // spawn function is invoked on player object here

    player.animations.add('idle', [8, 9], 2, true);
    player.animations.add('jump', [15], 1, true);
    player.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    player.animations.add('shoot-fireball-right', [10, 11, 12, 13, 14], 20, false);
    player.animations.add('shoot-fireball-left', [10, 11, 12, 13, 14], 20, false);
    player.animations.add('damage',[16, 17, 18, 19, 20, 21], 10, false);
    this.camera.follow(player);
    this.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.setSize(player.width * 2 / 3, player.height * 95 / 100);

    controls = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    }

    blue0 = new BlueGemItem(0, game, player.x + 100, player.y - 30);
    blue1 = new BlueGemItem(0, game, player.x + 215, player.y - 50);
    blue2 = new BlueGemItem(0, game, player.x + 725, player.y - 50);
    blue3 = new BlueGemItem(0, game, player.x + 425, player.y + 400);
    blue4 = new BlueGemItem(0, game, player.x + 1550, player.y + -70);
    blue5 = new BlueGemItem(0, game, player.x + 2950, player.y + 275);
    blue6 = new BlueGemItem(0, game, player.x + 2165, player.y + 175);

    red0 = new RedGemItem(0, game, player.x + 0, player.y + 800);
    red1 = new RedGemItem(0, game, player.x + 2492, player.y + -330);
    red2 = new RedGemItem(0, game, player.x + 2525, player.y + 175);

    key0 = new GoldKeyItem(0, game, player.x + 0, player.y + 400);
    key1 = new GoldKeyItem(0, game, player.x + 2950, player.y + 650);

    magic0 = new MagicBeakerItem(0, game, player.x + 3046, player.y + -94);

    enemy0 = new Enemybat(0, game, player.x + 260, player.y - 75);
    enemy1 = new Enemybat(0, game, player.x + 475, player.y - 75);

    var portait = this.add.sprite(5, 5, 'portait');
        portait.scale.x= 0.5;
        portait.scale.y= 0.5;
        portait.fixedToCamera = true;

    text0 = game.add.text(game.camera.x + 65, game.camera.y + 5, "Score: " + score, {
      font: '20px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    text1 = game.add.text(game.camera.x + 65, game.camera.y + 25, "HP:" + health + " MP:" + mana, {
      font: '20px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    text3 = game.add.text(game.camera.x + 65, game.camera.y + 45, "Keys: " + key +"/2", {
      font: '20px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    fireballsRight = game.add.group();
    fireballsRight.enableBody = true;
    fireballsRight.physicsBodyType = Phaser.Physics.ARCADE;
    fireballsRight.createMultiple(20, 'fire-right');
    fireballsRight.setAll('anchor.x', 0.5);
    fireballsRight.setAll('anchor.y', 0.5);
    fireballsRight.setAll('outOfBoundsKill', true);
    fireballsRight.setAll('checkWorldBounds', true);
    fireballsRight.setAll('body.allowGravity', false);
    fireballsRight.setAll('body.setSize', fireballsRight.width * 1 / 2, fireballsRight.height * 1 / 2);
    fireballsRight.callAll('animations.add', 'animations', 'fire-right', [0, 1, 2, 3, 4], 5, true);
    fireballsRight.callAll('play', null, 'fireball-sound');

    fireballsLeft = game.add.group();
    fireballsLeft.enableBody = true;
    fireballsLeft.physicsBodyType = Phaser.Physics.ARCADE;
    fireballsLeft.createMultiple(20, 'fire-left');
    fireballsLeft.setAll('anchor.x', 0.5);
    fireballsLeft.setAll('anchor.y', 0.5);
    fireballsLeft.setAll('outOfBoundsKill', true);
    fireballsLeft.setAll('checkWorldBounds', true);
    fireballsLeft.setAll('body.allowGravity', false);
    fireballsLeft.callAll('animations.add', 'animations', 'fire-left', [0, 1, 2, 3, 4], 5, true);
    fireballsLeft.callAll('play', null, 'fireball-sound');

    fireballCollision = game.add.group();
    fireballCollision.createMultiple(30, 'big-fireball-collision');
    fireballCollision.forEach(deathAnimation, this);

    function deathAnimation(enemy){
      enemy.anchor.x= 0.5;
      enemy.anchor.y= 0.5;
      enemy.animations.add('big-fireball-collision')
    }

    // fireballCollision.enableBody = true;
    // fireballCollision.physicsBodyType = Phaser.Physics.ARCADE;
    // fireballCollision.setAll('anchor.x', 0.5);
    // fireballCollision.setAll('anchor.y', 0.5);
    // fireballCollision.setAll('outOfBoundsKill', true);
    // fireballCollision.setAll('checkWorldBounds', true);
    // fireballCollision.setAll('body.allowGravity', false);
    // fireballCollision.callAll('animations.add', 'animations', 'big-fireball-collision', [0, 1, 2, 3, 4, 5], 10, false);

    text0.fixedToCamera = true;
    text1.fixedToCamera = true;
    text2.fixedToCamera = true;
    text3.fixedToCamera = true;

  },

  update: function (game) {

    if (health <= 0){
      backgroundMusic.mute = true;
      this.state.start('Endgame', true, false);
      health = 10;

    }

    this.physics.arcade.collide(player, blockedLayer);

    this.physics.arcade.collide(player, [blue0.blueGem, blue1.blueGem, blue2.blueGem, blue3.blueGem, blue4.blueGem, blue5.blueGem, blue6.blueGem], this.item100, null, this);
    this.physics.arcade.collide(player, [red0.redGem, red1.redGem, red2.redGem], this.item500, null, this);
    this.physics.arcade.collide(player, [key0.goldKey, key1.goldKey], this.itemKey, null, this);
    this.physics.arcade.collide(player, [magic0.magicBeaker], this.itemMagicBeaker, null, this);

    this.physics.arcade.collide(player, [enemy0.bat, enemy1.bat], this.playerDamage);

    this.physics.arcade.overlap(fireballsRight, [enemy0.bat, enemy1.bat], this.collisionHandler, null, this);
    this.physics.arcade.overlap(fireballsLeft, [enemy0.bat, enemy1.bat], this.collisionHandler, null, this);

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
      player.body.velocity.y = -625;
      jumpTimer = this.time.now + 675;
      player.animations.play('jump');
    }

    if (controls.shoot.isDown && facing == 'right' && mana > 0) {
      this.shootFireballRight();
    }

    if (controls.shoot.isDown && facing == 'left' && mana > 0) {
      this.shootFireballLeft();
    }

    if (player.body.velocity.x == 0 && player.body.velocity.y == 0 && !controls.shoot.isDown) {
      player.animations.play('idle');
    }

    if (enterKey.isDown) {    //this will be removed from the live version.
        this.select.play();
        this.camera.flash('#000000');
        backgroundMusic.loop = false;
        backgroundMusic.stop();
        this.state.start('Endgame');
    }

  },

  collisionHandler: function(fireball, bat) {
    fireball.kill();
    bat.kill();
    text0.setText("Score: " + (score += 50));
    // var fireballCollision = fireballCollisions.getFirstExists(false);
    // fireballCollisions.reset(enemy0.body.x, enemy0.body.y);
    // fireballCollisions.play('big-fireball-collision', 10, false. true);
  },

  item100: function(player, blueGem) {
    blueGem.kill();
    this.pickupItem.play();
    text0.setText("Score: " + (score += 100));
  },

  item500: function(player, redGem) {
    redGem.kill();
    this.pickupItem.play();
    text0.setText("Score: " + (score += 500));
  },

  itemKey: function(player, goldKey) {
    goldKey.kill();
    this.pickupItem.play();
    text3.setText("Keys: " + (key += 1) +"/2");
  },

  itemMagicBeaker : function (player, magicBeaker) {
    magicBeaker.kill();
    this.pickupItem.play();
    text1.setText("HP:" + health + " MP:" + (mana += 10));
  },

  spawn: function() {
    respawn.forEach(function(spawnPoint) {
      player.reset(spawnPoint.x, spawnPoint.y);
    }, this);
  },

  nextLevel: function() {
    backgroundMusic.mute = true;
    this.state.start('Endgame', true, false);
  },

  playerDamage: function() {
    text1.setText("HP:" + (health -= 1) + " MP:" + mana);
    player.animations.play('damage');
    player.body.velocity.y = -550;
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
          text1.setText("HP:" + health + " MP:" + (mana -= 1));

      }
    }
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
          text1.setText("HP:" + health + " MP:" + (mana -= 1));

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
