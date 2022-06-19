import MovieList from 'components/MovieList';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getTrending } from '../services/movie-api';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { isLoading, error, data } = useQuery('getTrending', () =>
    getTrending()
  );
  const location = useLocation();
  if (error) return <h2>An error has occurred {error.message} </h2>;
  if (!isLoading)
    return (
      <>
        <h1 className={styles.title}>Trending today</h1>
        <MovieList data={data} location={location} />
      </>
    );
};

export default HomePage;
