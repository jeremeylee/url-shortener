import axios from 'axios';

const shortenUrl = async (url) => {
  const response = await axios.post('/api/urlShortener', url);
  return response.data;
}

export default { shortenUrl };
