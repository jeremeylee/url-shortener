const shortenerRouter = require('express').Router();
const validUrl = require('valid-url');
const nanoid = require('nanoid');
const UrlShortener = require('../models/UrlShortener');

shortenerRouter.post('/api/urlShortener', async (req, res, next) => {
  const { body } = req;
  console.log(body)
  try {
    if (validUrl.isUri(body.url)) {
      const foundUrl = await UrlShortener.findOne({ originalUrl: body.url });
      if (foundUrl) {
        console.log(foundUrl.toJSON());
        res.send(foundUrl);

      } else {
        let notFound = true;
        let shortenUrl = nanoid(10);

        while (notFound) {
          const foundUrl = await UrlShortener.findOne({ shortenUrl: shortenUrl});
          if (foundUrl) {
            shortenUrl = nanoid(10);
          } else {
            notFound = false;
          }
        }
        
        const newShortenUrl = new UrlShortener({
          originalUrl: body.url,
          shortenUrl,
        });

        await newShortenUrl.save();
        res.status(200).send(newShortenUrl);
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
