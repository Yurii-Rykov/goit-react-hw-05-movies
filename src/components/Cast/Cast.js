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
        {hero.map(({id, profile_path, name, character }) => {
          const path = profile_path
          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
          : 'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg';

          return (
          <li key={id} className={s.item}>
            <img
              src={path}
              alt={name}
              className={s.img}
            />
            <h3 className={s.name}>{name}</h3>
            <p className={s.text}>Character: {character}</p>
          </li>
        )})}
      </ul>
    </>
  );
};
export default Cast;
