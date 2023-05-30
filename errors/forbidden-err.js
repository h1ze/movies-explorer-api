const { FORBIDDEN_ERROR_CODE } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_ERROR_CODE;
  }
}

module.exports = ForbiddenError;
