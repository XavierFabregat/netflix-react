'use strict'

const movieModels = require('../models/Movie.js');

async function postMovie(req,res) {
  try {
    const newMovie = await movieModels.create(req.body);
    res.status(201)
    res.send(newMovie);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getMovies(req,res) {
  try {
    const movies = await movieModels.find({});
    res.status(200);
    res.send(movies);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function deleteMovie(req,res) {
  try {
    const movieToDel = await movieModels.deleteOne({ 'id': req.body.id });
    res.status(202);
    res.send(movieToDel);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = {
  postMovie,
  getMovies,
  deleteMovie,
}