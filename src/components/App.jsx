import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { NotFound } from './NotFound';
import { MovieDetailsPage } from './MovieDetailsPage';
import { Header } from './Header';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 0,
    },
  },
});

export const App = () => {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};
