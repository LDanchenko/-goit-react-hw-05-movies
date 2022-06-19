import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

 const Header = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export { Header };