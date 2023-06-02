const { ALLOWED_CORS } = require('./constants');
const ForbiddenError = require('../errors/forbidden-err');

const corsOptions = {
  origin: (origin, callback) => {
    if (ALLOWED_CORS.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new ForbiddenError());
    }
  },
};

module.exports = corsOptions;
