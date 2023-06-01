const { CONFLICT_ERROR_CODE, CONFLICT_ERROR_MESSAGE } = require('../utils/constants');

class ConflictError extends Error {
  constructor() {
    super(CONFLICT_ERROR_MESSAGE);
    this.statusCode = CONFLICT_ERROR_CODE;
  }
}

module.exports = ConflictError;
