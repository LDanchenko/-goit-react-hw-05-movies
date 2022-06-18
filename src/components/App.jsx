import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { NotFound } from './NotFound';
import { Header } from './Header';
const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};
