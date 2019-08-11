const shortenerRouter = require('express').Router();
const URLShortener = require('../models/URLShortener');

shortenerRouter.get('/', async (req, res, next) => {
  try {
    res.send('hello world');
  } catch (exception) {
    next(exception);
  }
});

module.exports = shortenerRouter;
