require('dotenv').config();

var express = require ('express')
var app = express ();
var bodyParser = require('body-parser');
var queries = require ('./db/queries');
var http = require('http');
var debug = require('debug')

app.use(express.static("dist"));
app.use(bodyParser.json());

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// GET method route
app.get('/highscores', function (req, res, next) {
  queries.getScore()
  .then(function(data){
    res.json(data);
  })
});

// POST method route
app.post('/highscores', function (req, res, next) {
  console.log(req.body);
  queries.createScore(req.body)
  .then(function(data){
    res.json(data);
  })
});

app.get('*', function (req, res) {
  res.sendFile('dist/index.html', {root:'.'});
});
