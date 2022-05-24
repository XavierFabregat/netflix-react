const Express = require('express');
const movieControllers = require('./controllers/movie.js');


const router = Express.Router();

router.post('/movie', movieControllers.postMovie);
router.get('/movie', movieControllers.getMovies);
router.delete('/movie', movieControllers.deleteMovie);


module.exports = router;