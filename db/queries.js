var knex = require('./knex')

function getScore() {
  return knex('scoreboard').orderBy('score', 'desc');
}
function createScore(scoreboard) {
  return getScore().insert(scoreboard, 'id')
}

module.exports ={
  getScore,
  createScore
}
