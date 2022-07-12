'use strict'

const ratingModels = require('../models/Rating.js');


async function postRating(req,res) {
  try {
    const newRating = await ratingModels.create(req.body);
    res.status(201)
    res.send(newRating);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getRatingById(req,res) {
  try {
    const rating = await ratingModels.find({ 'movie_id': req.params['id']});
    res.status(200);
    res.send(rating);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function updateRatingById(req,res) {
  try {
    const updRating = await ratingModels.updateOne({'movie_id':req.body.movie_id}, {$set: {'rating': req.body.rating}});
    res.status(204);
    res.send(updRating);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}


module.exports = {
  postRating,
  getRatingById,
  updateRatingById,
}