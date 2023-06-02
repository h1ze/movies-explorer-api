const { BAD_REQUEST_ERROR_CODE, BAD_REQUEST_ERROR_MESSAGE } = require('../utils/constants');

class BadRequestError extends Error {
  constructor() {
    super(BAD_REQUEST_ERROR_MESSAGE);
    this.statusCode = BAD_REQUEST_ERROR_CODE;
  }
}

module.exports = BadRequestError;
