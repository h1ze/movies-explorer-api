const mainRouter = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

// Импорт роутеров
const signup = require('./signup');
const users = require('./users');

// Роуты без авторизации
mainRouter.use('/signup', signup);

mainRouter.use('/users/me', users);
mainRouter.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = mainRouter;
