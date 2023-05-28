const mainRouter = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

// Импорт роутеров
const users = require('./users');

mainRouter.use('/users/me', users);
mainRouter.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = mainRouter;
