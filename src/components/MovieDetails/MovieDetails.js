import { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';
const axios = require('axios').default;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    async function infoApi() {
      try {
        const response = await axios({
          method: 'get',
          url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1`,
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    infoApi().then(res => setMovie(res.data));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
        <button type="button" onClick={goBack}>Go back</button>
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>Vote_average: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres.map(el => {
            return <p key={el.id}>{el.name}</p>;
          })}

          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li> 
          </ul>
        </section>

        <section>
          <Outlet />
        </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
