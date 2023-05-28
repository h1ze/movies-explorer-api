const signupRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser } = require('../controllers/signup');
// const REG_EXP = require('../utils/constants');

signupRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), createUser);

module.exports = signupRouter;
