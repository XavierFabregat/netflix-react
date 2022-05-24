'use strict'

const mongoose = require('./index.js');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
adult: {
    type: Boolean
  },
  backdrop_path: {
    type: String
  },
  id: {
    type: Number
  },
  original_language: {
    type: String
  },
  original_title: {
    type: String
  },
  overview: {
    type: String
  },
  popularity: {
    type: Number
  },
  poster_path: {
    type: String
  },
  release_date: {
    type: String
  },
  title: {
    type: String
  },
  video: {
    type: Boolean
  },
  vote_average: {
    type: Number
  },
  vote_count: {
    type: Number
  }
}, {
  versionKey: false
})

const Movie = mongoose.model('wishlistMovies', movieSchema);

module.exports = Movie;