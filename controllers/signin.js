const { generateToken } = require('../utils/token');
const User = require('../models/user');

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password, next)
    .then((user) => {
    // аутентификация успешна! пользователь в переменной user
      const token = generateToken({ _id: user._id });
      res.send({ token });
    })
    .catch(next);
};
