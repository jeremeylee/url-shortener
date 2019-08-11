const mongoose = require('mongoose');

const URLShortenerSchema = new mongoose.Schema({
  originalURL: String,
  shortenURL: String,
})

export default mongoose.model('URLShortener', URLShortenerSchema);
