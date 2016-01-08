var express = require('express'),
    api     = express.Router();

/* GET users listing. */
api.get('/users', function(req, res, next) {
  res.status(200).json({ user: 'Jose'});
});

module.exports = api;
