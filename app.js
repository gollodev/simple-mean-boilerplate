var express        = require('express'),
    path           = require('path'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),    
    usersModule    = require('./modules/users/users.module');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

if (app.get('env') === 'development' || 'test') {
  app.use(express.static(path.join(__dirname, 'public/src')));
} else {
  app.use(express.static(path.join(__dirname, 'public/dist')));
}

app.use('/api', usersModule);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
