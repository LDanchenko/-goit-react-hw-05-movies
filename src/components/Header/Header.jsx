import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
