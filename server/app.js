'use strict'

require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const logger = require('morgan');
const app = express();

const queries = require ('./db/queries');

app.use(express.static("dist"));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
