const { PORT = 3000 } = process.env;
const DATABASE = 'mongodb://127.0.0.1:27017//bitfilmsdb';

module.exports = { PORT, DATABASE };
