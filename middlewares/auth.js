const { checkToken } = require('../utils/token');
const AuthError = require('../errors/auth-err');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  let payload;
  try {
  // достаём токен
    const { jwt } = req.cookies;

    // убеждаемся, что он есть
    if (!jwt) {
      throw new AuthError('Необходима авторизация');
    }

    // верифицируем токен
    payload = checkToken(jwt);
  } catch (err) {
    // отправим ошибку, если не получилось
    return next(new AuthError('Проблемы с авторизацией'));
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};
