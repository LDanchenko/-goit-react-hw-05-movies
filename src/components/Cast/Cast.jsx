import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movie-api';

const Cast = () => {
  let { id } = useParams();

  const { isLoading, error, data } = useQuery('getMovieCredits', () =>
    getMovieCredits(id)
  );

  if (error) return <h2>An error has occurred {error.message} </h2>;
  if (!isLoading) {
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                width="100px"
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
              />
            )}
            <p>{item.name} </p>
            <p>Character: {item.character} </p>
          </li>
        ))}
      </ul>
    );
  }
};

export { Cast };
