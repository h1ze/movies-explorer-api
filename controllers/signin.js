const { generateToken } = require('../utils/token');
const User = require('../models/user');

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password, next)
    .then((user) => {
      // аутентификация успешна! пользователь в переменной user
      const token = generateToken({ _id: user._id });
      // отправим токен, браузер сохранит его в куках
      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        })
        .send({ message: 'Успешный логин' }); // если у ответа нет тела, можно использовать метод end
    })
    .catch(next);
};
