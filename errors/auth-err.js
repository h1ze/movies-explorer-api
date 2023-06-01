const { AUTH_ERROR_CODE, AUTH_ERROR_MESSAGE } = require('../utils/constants');

class AuthError extends Error {
  constructor() {
    super(AUTH_ERROR_MESSAGE);
    this.statusCode = AUTH_ERROR_CODE;
  }
}

module.exports = AuthError;
