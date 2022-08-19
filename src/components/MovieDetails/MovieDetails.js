import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios').default;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

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
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Vote_average: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {/* {movie.genres.map(el => {return <p>{el.name}</p>})} */}
          <h3>Additional information</h3>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
