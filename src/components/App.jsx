import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './Header';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviePage = lazy(() =>
  import('../pages/MoviePage' /* webpackChunkName: "movie-page" */)
);
const NotFound = lazy(() =>
  import('./NotFound' /* webpackChunkName: "not-found-page" */)
);
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage' /* webpackChunkName: "movie-info-page" */)
);
const Cast = lazy(() =>
  import('./Cast' /* webpackChunkName: "movie-cast-info" */)
);
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "movie-reviews-info" */)
);

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
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </>
  );
};
