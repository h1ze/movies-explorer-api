const {
  PORT = 3000, JWT_SECRET, NODE_ENV, DATABASE = 'mongodb://127.0.0.1:27017/bitfilmsdb',
} = process.env;

const SECRET_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret';

module.exports = {
  PORT, DATABASE, SECRET_KEY, NODE_ENV,
};
