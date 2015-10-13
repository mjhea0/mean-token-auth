// *** main dependencies *** //
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// *** config file *** //
var config = require('../_config');


// *** express instance *** //
var app = express();


// *** routes *** //
var mainRoutes = require('./routes/index');
var authRoutes = require('./routes/auth');


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


// *** mongoose ** //
mongoose.connect(config.MONGO_URI);


// *** main routes *** //
app.use('/', mainRoutes);
app.use('/auth', authRoutes);


// *** handle 404 error *** //
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send({
      message: err.message,
      error: err
    });
  });
}
app.use(function(err, req, res, next) {
  var status = err.status || 500;
  res.status(status).send({
    message: err.message,
    error: err
  });
});

module.exports = app;
