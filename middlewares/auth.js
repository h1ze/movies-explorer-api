const { checkToken } = require('../utils/token');
const AuthError = require('../errors/auth-err');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  let payload;
  try {
  // достаём авторизационный заголовок
    const { authorization } = req.headers;

    // убеждаемся, что он есть или начинается с Bearer
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new AuthError('Необходима авторизация');
    }

    // Убираем Bearer, оставляем только строку с токеном
    const token = authorization.replace('Bearer ', '');

    // верифицируем токен
    payload = checkToken(token);
  } catch (err) {
    // отправим ошибку, если не получилось
    return next(new AuthError('Проблемы с авторизацией'));
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};
