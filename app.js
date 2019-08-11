const express = require('express');
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

app.use(bodyParser.json());
app.use('/', shortenerRouter);

module.exports = app;
