import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/api.js';
import s from './Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [hero, setHero] = useState([]);

  useEffect(() => {
    API.cast(movieId).then(res => setHero(res.data.cast));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ul className={s.wrapper}>
        {hero.map(el => (
          <li key={el.id} className={s.item}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
              alt="el.name"
              className={s.img}
            />
            <h3 className={s.name}>{el.name}</h3>
            <p className={s.text}>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
