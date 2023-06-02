const { FORBIDDEN_ERROR_CODE, FORBIDDEN_ERROR_MESSAGE } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor() {
    super(FORBIDDEN_ERROR_MESSAGE);
    this.statusCode = FORBIDDEN_ERROR_CODE;
  }
}

module.exports = ForbiddenError;
