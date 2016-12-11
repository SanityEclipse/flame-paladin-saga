BlueGemItem = function (index, game, x, y) {
  this.blueGem = game.add.sprite(x, y, 'blue-gem');
  this.blueGem.name = index.toString();
  game.physics.enable(this.blueGem, Phaser.Physics.ARCADE);
  this.blueGem.body.immovable = true;
  this.blueGem.body.collideWorldBounds = true;
  this.blueGem.body.allowGravity = false;
  this.blueGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
  this.blueGem.animations.play('shimmer', 10, true);
},

RedGemItem = function (index, game, x, y) {
  this.redGem = game.add.sprite(x, y, 'red-gem');
  this.redGem.name = index.toString();
  game.physics.enable(this.redGem, Phaser.Physics.ARCADE);
  this.redGem.body.immovable = true;
  this.redGem.body.collideWorldBounds = true;
  this.redGem.body.allowGravity = false;
  this.redGem.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
  this.redGem.animations.play('shimmer', 10, true);
},

GoldKeyItem = function (index, game, x, y) {
  this.goldKey = game.add.sprite(x, y, 'gold-key');
  this.goldKey.name = index.toString();
  game.physics.enable(this.goldKey, Phaser.Physics.ARCADE);
  this.goldKey.body.immovable = true;
  this.goldKey.body.collideWorldBounds = true;
  this.goldKey.body.allowGravity = false;
  this.goldKey.animations.add('shimmer', [0, 1, 2, 3, 4, 5], 5, true);
  this.goldKey.animations.play('shimmer', 5, true);
},

MagicPotionItem = function (index, game, x, y) {
  this.magicPotion = game.add.sprite(x, y, 'portait');
  this.magicPotion.name = index.toString();
  game.physics.enable(this.purpleGem, Phaser.Physics.ARCADE);
  this.magicPotion.body.immovable = true;
  this.magicPotion.body.collideWorldBounds = true;
  this.magicPotion.body.allowGravity = false;
}

Game.Level1 = function(game){}

var background;
var controls = {};
var count = 0;
var enterKey; //will be taken out of live version. Demo puposes only.
var facing = 'right';
var fireballs;
var jumpTimer = 0;
var key = 0;
var mana = 10;
var map;
var player;
var playerSpeed = 400;
var portrait;
var respawn;
var score = 0;
var shootTime = 0;
var text;
var text1;
var text2;
var text3;

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
    this.pickupItem = game.add.audio("pickup-item")

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
    this.camera.follow(player);
    this.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

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
    blue5= new BlueGemItem(0, game, player.x + 2950, player.y + 275);
    blue6= new BlueGemItem(0, game, player.x + 2165, player.y + 175);



    red0 = new RedGemItem(0, game, player.x + 0, player.y + 800);
    red1 = new RedGemItem(0, game, player.x + 2492, player.y + -330);
    red2 = new RedGemItem(0, game, player.x + 2525, player.y + 175);

    key0 = new GoldKeyItem(0, game, player.x + 0, player.y + 400);
    key1 = new GoldKeyItem(0, game, player.x + 2950, player.y + 650);




    portait = this.add.sprite(5, 5, 'portait');
    portait.scale.x= 0.5;
    portait.scale.y= 0.5;
    portait.fixedToCamera = true;

    text = game.add.text(game.camera.x + 65, game.camera.y + 5, "Score: " + count, {
      font: '20px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    text1 = game.add.text(game.camera.x + 65, game.camera.y + 25, "Magic: ", {
      font: '20px Press Start 2P',
      fill: '#ffffff',
      align: 'center'
    });

    text2 = game.add.text(game.camera.x + 205, game.camera.y + 25, mana, {
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
    text3.fixedToCamera = true;

  },

  update: function (game) {

    this.physics.arcade.collide(player, blockedLayer);

    this.physics.arcade.collide(player, blue0.blueGem);
    this.physics.arcade.collide(player, blue1.blueGem);
    this.physics.arcade.collide(player, blue2.blueGem);
    this.physics.arcade.collide(player, blue3.blueGem);
    this.physics.arcade.collide(player, blue4.blueGem);
    this.physics.arcade.collide(player, blue5.blueGem);
    this.physics.arcade.collide(player, blue6.blueGem);



    this.physics.arcade.collide(player, red0.redGem);
    this.physics.arcade.collide(player, red1.redGem);
    this.physics.arcade.collide(player, red2.redGem);


    this.physics.arcade.collide(player, key0.goldKey);
    this.physics.arcade.collide(player, key1.goldKey);




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

    if (checkOverlap(player, blue0.blueGem)){
        blue0.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, blue1.blueGem)){
        blue1.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, blue2.blueGem)){
        blue2.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, blue3.blueGem)){
        blue3.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, blue4.blueGem)){
        blue4.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, blue5.blueGem)){
        blue5.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, blue6.blueGem)){
        blue6.blueGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 100));
    }
    if (checkOverlap(player, red0.redGem)){
        red0.redGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 500));
    }
    if (checkOverlap(player, red1.redGem)){
        red1.redGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 500));
    }
    if (checkOverlap(player, red2.redGem)){
        red2.redGem.kill();
        this.pickupItem.play();
        text.setText("Score: " + (count += 500));
    }
    if (checkOverlap(player, key0.goldKey)){
        key0.goldKey.kill();
        this.pickupItem.play();
        text3.setText("Keys: " + (key += 1) +"/2");
    }
    if (checkOverlap(player, key1.goldKey)){
        key1.goldKey.kill();
        this.pickupItem.play();
        text3.setText("Keys: " + (key += 1) +"/2");
    }

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
