var express = require ('express')
var app = express ();
var bodyParser = require ('body-parser');
var queries = require ('./db/queries');

app.listen(3000, function () {
console.log('Listening on port 3000') ;
});

app.use(express.static("dist"));

// GET method route
app.get('/highscores', function (req, res, next) {
  queries.getScore()
  .then(function(data){
    res.json(data);
  })
});

// POST method route
// app.post('/highscore', function (req, res, next) {
//   queries.createScore(req.body)
//   .then(function(){
//     res.redirect('/');
//   })
// });

app.get('*', function (req, res) {
  res.sendFile('dist/index.html', {root:'.'});
});
