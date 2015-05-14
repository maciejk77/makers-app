var mongoose = require('mongoose');

var MakersSchema = new mongoose.Schema({
  name: String,
  pair: Boolean,
  blacklisted: Boolean,
  numOfCommits: 0,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Maker', MakersSchema);