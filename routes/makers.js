var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Makers = require('../models/Makers.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Makers.find(function (err, makers) {
    if (err) return next(err);
    res.json(makers);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Makers.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Makers.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Makers.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Makers.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
