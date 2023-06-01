const { checkToken } = require('../utils/token');
const AuthError = require('../errors/auth-err');

module.exports = (req, res, next) => {
  let payload;
  try {
  // достаём токен
    const { jwt } = req.cookies;

    // убеждаемся, что он есть
    if (!jwt) {
      throw new AuthError();
    }

    // верифицируем токен
    payload = checkToken(jwt);
  } catch (err) {
    // отправим ошибку, если не получилось
    return next(new AuthError());
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  return next(); // пропускаем запрос дальше
};
