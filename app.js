require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
const { PORT, DATABASE } = require('./utils/config');

app.use(express.json());

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
});

app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
