const { ALLOWED_CORS } = require('./constants');

const corsOptions = {
  origin: (origin, callback) => {
    if (ALLOWED_CORS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = corsOptions;
