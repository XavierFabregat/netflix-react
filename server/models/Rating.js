'use strict'

const mongoose = require('./index.js');

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  movie_id: Number,
  rating: Number
}, {
  versionKey: false
})

const Rating = mongoose.model('userRatings', RatingSchema);

module.exports = Rating;