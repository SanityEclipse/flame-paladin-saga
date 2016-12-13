var knex = require('./knex')

function getScore() {
  return knex('scoreboard');
}
function createScore(scoreboard) {
  return getScore().insert(scoreboard, 'id')
}

module.exports ={
  getScore,
  createScore
}
