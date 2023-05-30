const { PORT = 3000, SECRET_KEY, NODE_ENV } = process.env;
const DATABASE = 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  PORT, DATABASE, SECRET_KEY, NODE_ENV,
};
