var knex = require('./knex')

function getScore() {
  return knex('newEntries');
}
function createScore(scoreboard) {
  return getEntries().insert(scoreboard, 'id')
}

module.exports ={
  getScore,
  createScore
}
