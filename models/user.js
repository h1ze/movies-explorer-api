const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');
const AuthError = require('../errors/auth-err');
const AUTH_ERROR_LOGIN_MESSAGE = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле "name" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля "name" - 2'],
    maxlength: [30, 'Максимальная длина поля "name" - 30'],
  },
  email: {
    type: String,
    required: [true, 'Поле "email" должно быть заполнено'],
    unique: [true, 'Email должен быть уникальным'],
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Некорректный Email',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле "password" должно быть заполнено'],
    select: false,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthError(AUTH_ERROR_LOGIN_MESSAGE));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthError(AUTH_ERROR_LOGIN_MESSAGE));
          }
          return user;
        });
    });
};
module.exports = mongoose.model('user', userSchema);
