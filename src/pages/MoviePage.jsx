import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from '../services/movie-api';
import MovieList from '../components/MovieList';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movieData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: query });
    if (query === '') {
      Notify.failure('Please enter valid name');
    } else {
      setData([]);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (!loading) {
      return;
    }
    handleMovie(query);
    // eslint-disable-next-line
  }, [query, loading]);

  useEffect(() => {
    if (searchParams?.get('query')?.length > 0) {
      handleMovie(searchParams.get('query'));
    }
    // eslint-disable-next-line
  }, []);

  const handleMovie = query => {
    getMovie(query)
      .then(data => handleData(data))
      .catch(error => console.log(error.message))
      .finally(() => {
        setLoading(false);
        setQuery('');
      });
  };

  const handleData = data => {
    data.length === 0 ? Notify.failure('Nothing found') : setData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.target.value.trim())}
          value={query}
        />
        <button type="submit">Search </button>
      </form>
      {loading && <h2>Loading...</h2>}
      {movieData.length > 0 && (
        <MovieList data={movieData} location={location} />
      )}
    </>
  );
};

export default MoviePage;
