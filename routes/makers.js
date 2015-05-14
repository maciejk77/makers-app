var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Makers = require('../models/Makers.js');

/* GET /makers listing. */
router.get('/', function(req, res, next) {
  Makers.find(function (err, makers) {
    if (err) return next(err);
    res.json(makers);
  });
});

/* POST /makers */
router.post('/', function(req, res, next) {
  Makers.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /makers/id */
router.get('/:id', function(req, res, next) {
  Makers.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /makers/:id */
router.put('/:id', function(req, res, next) {
  Makers.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /makers/:id */
router.delete('/:id', function(req, res, next) {
  Makers.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
