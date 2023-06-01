const { ValidationError, CastError, DocumentNotFoundError } = require('mongoose').Error;
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(`Пользователь с ID ${req.user._id} не найден.`));
      } else if (err instanceof CastError) {
        next(new BadRequestError('Некорректные данные при запросе'));
      } else {
        next(err);
      }
    });
};

module.exports.updateUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, email }, {
    new: true, // обработчик then получит на вход обновлённую запись
    runValidators: true, // данные будут валидированы перед изменением
  })
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequestError('Некорректные данные при запросе'));
      } else if (err instanceof DocumentNotFoundError) {
        next(NotFoundError('Запрашиваемый пользователь не найден'));
      } else if (err.code === 11000) {
        next(new ConflictError('Email должен быть уникальным'));
      } else {
        next(err);
      }
    });
};
