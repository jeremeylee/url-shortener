const mongoose = require('mongoose');

const UrlShortenerSchema = new mongoose.Schema({
  originalUrl: String,
  shortenUrl: String,
});

module.exports = mongoose.model('UrlShortener', UrlShortenerSchema);
