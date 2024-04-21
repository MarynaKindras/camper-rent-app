import axios from 'axios';

axios.defaults.baseURL = 'https://661bf640e7b95ad7fa6966ae.mockapi.io';

export const getCampers = async (page = 1) => {
  const data = await axios.get(`/advert/?page=${page}&limit=4`);
  return data;
};
