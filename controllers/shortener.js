const shortenerRouter = require('express').Router();
const validUrl = require('valid-url');
const nanoid = require('nanoid');
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
      const foundUrl = await UrlShortener.findOne({ originalUrl: body.url });

      if (foundUrl) {
        res.send(`/${foundUrl.shortenUrl}`);

      } else {
        const shortenUrl = nanoid(10);

        const newShortenUrl = new UrlShortener({
          originalUrl: body.url,
          shortenUrl,
        });

        await newShortenUrl.save();

        res.status(200).send(`/${shortenUrl}`);
      }
    } else {
      res.status(400).end();
    }
  } catch (exception) {
    next(exception);
  }
});

shortenerRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundUrl = await UrlShortener.findOne({ shortenUrl: id });
    if (foundUrl) {
      res.redirect(foundUrl.originalUrl);
    } else {
      res.status(400).end();
    }
  } catch (exception) {
    next(exception);
  }
})
module.exports = shortenerRouter;
