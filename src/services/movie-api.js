import axios from 'axios';

const API_KEY = 'c2ea3dda8b7f673838b93491bd4cf505';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getTrending = async () => {
  const {
    data: { results: data },
  } = await axios.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export { getTrending };
