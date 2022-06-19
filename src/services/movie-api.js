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

const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};

const getMovieCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};

const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results;
};

export { getTrending, getMovieDetails, getMovieCredits, getMovieReviews };
