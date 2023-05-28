const bcrypt = require('bcryptjs');
const { ValidationError } = require('mongoose').Error;
const User = require('../models/user');
const ConflictError = require('../errors/conflict-err');
const BadRequestError = require('../errors/bad-request-err');

module.exports.createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => res.status(201).send({
      data: {
        name: user.name, email: user.email,
      },
    }))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequestError('Некорректные данные при запросе'));
      } else if (err.code === 11000) {
        next(new ConflictError('Email должен быть уникальным'));
      } else {
        next(err);
      }
    });
};
