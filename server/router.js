const Express = require('express');
const movieControllers = require('./controllers/movie.js');
const ratingControllers = require('./controllers/rating.js');


const router = Express.Router();

router.post('/movie', movieControllers.postMovie);
router.get('/movie', movieControllers.getMovies);
router.delete('/movie', movieControllers.deleteMovie);
router.get('/movie/:id', movieControllers.getOneMovie);

router.post('/rating', ratingControllers.postRating);
router.get('/rating/:id', ratingControllers.getRatingById);
router.patch('/rating', ratingControllers.updateRatingById);


module.exports = router;