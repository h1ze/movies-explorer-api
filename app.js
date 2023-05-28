require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const { PORT, DATABASE } = require('./utils/config');
const mainRouter = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mainErorHandler = require('./middlewares/mainErorHandler');

const app = express();

app.use(express.json());

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
});

app.use(helmet());

app.use(requestLogger); // подключаем логгер запросов до всех обработчиков роутов

app.use('/', mainRouter);

// обработчики ошибок

app.use(errorLogger); // подключаем логгер ошибок после обработчиков роутов до обработчиков ошибок

app.use(mainErorHandler); // централизованный обработчик ошибок

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
