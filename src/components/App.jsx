import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('components/Home/Home'));
const Movies = lazy(() => import('components/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('components/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={ <Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
