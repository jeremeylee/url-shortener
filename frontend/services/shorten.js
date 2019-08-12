import axios from 'axios';

const shortenUrl = async (url) => {
  const response = axios.post('/', url);
  return response.data;
}

export default { shortenUrl };
