// Коды ошибок

const BAD_REQUEST_ERROR_CODE = 400;
const AUTH_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CONFLICT_ERROR_CODE = 409;

module.exports = {
  BAD_REQUEST_ERROR_CODE,
  AUTH_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
};

const REG_EXP = /^https?:\/\/(www\.)?([a-z0-9_-]+)(\.[a-z0-9_-]+).+/i;

module.exports = REG_EXP;
