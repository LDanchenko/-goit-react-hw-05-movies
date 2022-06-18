import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getTrending } from '../services/movie-api';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { isLoading, error, data } = useQuery('getTrending', () =>
    getTrending()
  );
  console.log(data);
  if (error) return <h2>An error has occurred {error.message} </h2>;
  if (!isLoading)
    return (
      <>
        <h1 className={styles.title}>Trending today</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <Link to={'/movies/' + item.id}>
                {item.title ? item.title : item.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
};
