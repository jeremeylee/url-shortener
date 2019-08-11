const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');

const app = express();
 
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MONGODB is running');
  })
  .catch((err) => {
    console.log('error: ', err);
  });

app.get('/', async (req, res, next) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server connected to ${PORT}`);
});