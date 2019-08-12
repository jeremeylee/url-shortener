const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const shortenerRouter = require('./controllers/shortener');
const app = express();
 
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB is running');
  })
  .catch((err) => {
    console.log('error: ', err);
  });
app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/', shortenerRouter);

module.exports = app;
