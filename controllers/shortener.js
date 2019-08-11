const shortenerRouter = require('express').Router();
const validUrl = require('valid-url');
const UrlShortener = require('../models/UrlShortener');

shortenerRouter.get('/', async (req, res, next) => {
  try {
    res.send('hello world');
  } catch (exception) {
    next(exception);
  }
});

shortenerRouter.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    if (validUrl.isUri(body.url)) {
      const foundUrl = UrlShortener.find({ originalUrl: body.url });
    } else {
      res.status(400).end();
    }
  }

});

module.exports = shortenerRouter;
