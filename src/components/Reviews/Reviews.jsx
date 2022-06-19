import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movie-api';

const Reviews = () => {
  let { id } = useParams();

  const { isLoading, error, data } = useQuery('getMovieReviews', () =>
    getMovieReviews(id)
  );
  if (error) return <h2>An error has occurred {error.message} </h2>;
  if (!isLoading) {
    if (data) {
      return (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h4>Author: {item.author} </h4>
              <p>{item.content} </p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <h2>No reviews yet.</h2>;
    }
  }
};

export { Reviews };
