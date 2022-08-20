import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/api.js';

const Cast = () => {
  const { movieId } = useParams();
  const [hero, setHero] = useState([]);

  useEffect(() => {
    API.cast(movieId).then(res => setHero(res.data.cast));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ul>
        {hero.map(el => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
              alt="el.name"
            />
            <h3>{el.name}</h3>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
