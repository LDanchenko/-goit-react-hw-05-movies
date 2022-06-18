import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getTrending } from '../services/movie-api';

export const HomePage = () => {
  const { isLoading, error, data } = useQuery('getTrending', () =>
    getTrending()
  );
  console.log(data);
  if (error) return <h2>An error has occurred {error.message} </h2>;
  if (!isLoading)
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title ? item.title : item.name}</li>
          ))}
        </ul>
      </>
    );
};
