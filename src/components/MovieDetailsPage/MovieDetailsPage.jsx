import { useQuery } from 'react-query';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  matchPath,
} from 'react-router-dom';
import { getMovieDetails } from '../../services/movie-api';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  let { id } = useParams();
  const { pathname } = useLocation();
  const linkEnabled = matchPath({ path: '/movies/:id/cast' }, pathname)
    ? true
    : false;

  const { isLoading, error, data } = useQuery('getMovieDetails', () =>
    getMovieDetails(id)
  );

  if (error) return <h2>An error has occurred {error.message} </h2>;
  if (!isLoading) {
    const {
      poster_path,
      title,
      name,
      release_date,
      popularity,
      genres,
      overview,
    } = data;
    const movieTitle = title ? title : name;
    const releaseDate = release_date.substring(0, 4);
    const moviePopularity = Math.round(popularity);
    const movieGenres = genres.map(genre => genre.name).join(', ');
    return (
      <>
        <div className={styles.wrapper}>
          <img
            className={styles.image}
            width="200px"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={movieTitle}
          />
          <div>
            <h2>
              {movieTitle} ({releaseDate})
            </h2>
            <p>User score: {moviePopularity}%</p>
            <h3>Overwiew</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{movieGenres}</p>
          </div>
        </div>

        <div className={styles.container}>
          <h4>Additional information</h4>
          {linkEnabled && (
            <Link className={styles.disabledLink} to={`${pathname}`}>
              Cast
            </Link>
          )}
          {!linkEnabled && <Link to={`${pathname}/cast`}>Cast</Link>}
        </div>
        <Outlet />
      </>
    );
  }
};

export { MovieDetailsPage };
