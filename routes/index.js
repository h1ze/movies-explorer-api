const mainRouter = require('express').Router();
const cookieParser = require('cookie-parser');
const NotFoundError = require('../errors/not-found-err');
const auth = require('../middlewares/auth');

// Импорт роутеров
const signup = require('./signup');
const users = require('./users');
const signin = require('./signin');

mainRouter.use(cookieParser()); // подключаем парсер кук как мидлвэр

// Роуты без авторизации
mainRouter.use('/signup', signup);
mainRouter.use('/signin', signin);

mainRouter.use(auth); // Подключение авторизации

// Роуты с авторизацией
mainRouter.use('/users/me', users);
mainRouter.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = mainRouter;
