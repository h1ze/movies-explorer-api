require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
const { PORT, DATABASE } = require('./utils/config');
const mainRouter = require('./routes');
const mainErorHandler = require('./middlewares/mainErorHandler');

app.use(express.json());

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
});

app.use(helmet());

app.use(mainRouter);

app.use(mainErorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
