
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scoreboard').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('scoreboard').insert({name: 'TNR', score: 1000}),
        knex('scoreboard').insert({name: 'CLD', score: 500}),
        knex('scoreboard').insert({name: 'ABC', score: 200})
      ]);
    });
};
