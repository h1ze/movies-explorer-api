const signinRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { login } = require('../controllers/signin');

signinRouter.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

module.exports = signinRouter;
