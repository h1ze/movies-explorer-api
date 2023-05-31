const moviesRouter = require('express').Router();
const { validateDeleteMovie, validateCreateMovie } = require('../middlewares/validation');

const {
  createMovie, deleteMoviedByID, getMovies,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.delete('/:movieDbId', validateDeleteMovie, deleteMoviedByID);

moviesRouter.post('/', validateCreateMovie, createMovie);

module.exports = moviesRouter;
