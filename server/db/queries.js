var knex = require('./knex')

function getScore() {
  return knex('scoreboard').orderBy('score', 'desc');
}

function createScore(scores) {
  return getScore().insert(scores, 'id')
}

module.exports ={
  getScore,
  createScore
}
