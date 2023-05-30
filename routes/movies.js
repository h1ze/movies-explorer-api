const moviesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const REG_EXP = require('../utils/constants');

const {
  createMovie, deleteMoviedByID, getMovies,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.delete('/:cardId', celebrate({
  // валидируем cardId
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), deleteMoviedByID);

moviesRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(REG_EXP),
  }),
}), createMovie);

module.exports = moviesRouter;
