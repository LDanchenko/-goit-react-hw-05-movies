import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ data, location }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <Link to={'/movies/' + item.id} state={{ from: location }}>
            {item.title ? item.title : item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieList;
