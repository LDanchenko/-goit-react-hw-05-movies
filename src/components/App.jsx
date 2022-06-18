import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { NotFound } from './NotFound';
import { Header } from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
