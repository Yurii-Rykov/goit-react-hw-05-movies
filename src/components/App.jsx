import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
// import axiosRequest from '../service/api'


function App() {
return(
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
  </>
)
}

export default App;