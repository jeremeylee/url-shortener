const mongoose = require('mongoose');

const URLShortenerSchema = new mongoose.Schema({
  originalURL: String,
  shortenURL: String,
});

module.exports = mongoose.model('URLShortener', URLShortenerSchema);
