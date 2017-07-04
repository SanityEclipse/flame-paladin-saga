const express= require('express')
const router = express.Router();

// GET method route
router.get('/highscores', function (req, res, next) {
  queries.getScore()
  .then(function(data){
    res.json(data);
  })
});

// POST method route
router.post('/highscores', function (req, res, next) {
  console.log(req.body);
  queries.createScore(req.body)
  .then(function(data){
    res.json(data);
  })
});

module.exports = router;
