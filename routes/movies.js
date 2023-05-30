const moviesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { REG_EXP } = require('../utils/constants');

const {
  createMovie, deleteMoviedByID, getMovies,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.delete('/:movieId', celebrate({
  // валидируем cardId
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
}), deleteMoviedByID);

moviesRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().integer().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(REG_EXP),
    trailerLink: Joi.string().required().pattern(REG_EXP),
    thumbnail: Joi.string().required().pattern(REG_EXP),
    movieId: Joi.number().integer().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);

module.exports = moviesRouter;
