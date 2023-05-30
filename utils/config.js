const { PORT = 3000, JWT_SECRET, NODE_ENV } = process.env;
const DATABASE = 'mongodb://127.0.0.1:27017/bitfilmsdb';

const SECRET_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret';

module.exports = {
  PORT, DATABASE, SECRET_KEY, NODE_ENV,
};
