var knex = require('./knex')

function getScore() {
  return knex('scoreboard');
}
function createScore(scoreboard) {
  return getEntries().insert(scoreboard, 'id')
}

module.exports ={
  getScore,
  createScore
}
