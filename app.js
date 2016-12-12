var express = require ('express')
var app = express ();
var bodyParser = require ('body-parser');

app.listen(3000, function () {
console.log('Listening on port 3000') ;
});

app.use(express.static("dist"));

// GET method route
app.get('/highscore', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/highscore', function (req, res) {
  res.send('POST request to the homepage');
});
app.get('*', function (req, res) {
  res.sendFile('dist/index.html', {root:'.'});
});
