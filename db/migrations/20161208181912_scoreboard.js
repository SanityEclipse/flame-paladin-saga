
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scoreboard', function(table){
    table.increments();
    table.string('name', [25]);
    table.integer('score');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scoreboard');
};
