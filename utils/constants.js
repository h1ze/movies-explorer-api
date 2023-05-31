// Коды ошибок
const BAD_REQUEST_ERROR_CODE = 400;
const AUTH_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CONFLICT_ERROR_CODE = 409;

// Регулярное выражение для валидации URL
const REG_EXP = /^https?:\/\/(www\.)?([a-z0-9_-]+)(\.[a-z0-9_-]+).+/i;

// Массив доменов, с которых разрешены кросс-доменные запросы
const ALLOWED_CORS = [
  'http://burnov.nomoredomains.monster',
  'https://burnov.nomoredomains.monster',
  'http://localhost:3000',
  'https://localhost:3000',
  'http://158.160.24.95',
  'https://158.160.24.95',
];

// Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  BAD_REQUEST_ERROR_CODE,
  AUTH_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  REG_EXP,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
