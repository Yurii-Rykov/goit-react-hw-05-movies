import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { API } from 'services/api';
import s from './MovieDetails.module.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const Cast = lazy(() => import('components/Cast/Cast'));
  const Reviews = lazy(() => import('components/Reviews/Reviews'));

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    API.infoCart(movieId).then(res => setMovie(res.data));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <section className={s.wrapper}>
          <button type="button" onClick={goBack} className={s.button}>
            Go back
          </button>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              className={s.img}
            />
          <div className={s.wrapperForInfo}>
            <h2 className={s.title}>{movie.title}</h2>
            <p className={s.text}><span className={s.span}>Vote_average:</span> {movie.vote_average}</p>
            <h3 className={s.secondTitle}>Overview:</h3>
            <p className={s.text}>{movie.overview}</p>
            <h3 className={s.secondTitle}>Genres:</h3>
            <div className={s.wrapperGenres}>
            {movie.genres.map(el => {
              return  <p key={el.id} className={s.textGenres}>{el.name}</p>;
            })}
            </div>

            <h3 className={s.secondTitle}>Additional information:</h3>
            <ul className={s.list}>
              <li className={s.item}>
                <Link to={'cast'} className={s.link}>Cast</Link>
              </li>
              <li className={s.item}>
                <Link to={'reviews'} className={s.link}>Reviews</Link>
              </li>
            </ul>
          </div>              
          </section>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
