import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Home.module.css';
import { API } from '../../services/api.js';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.trending().then(res => {
      setData(res.data.results);
    });
  }, []);

  return (
    <>
      <h1 className={s.title}><span className={s.span}>Tranding</span> today</h1>

      <ul className={s.movies}>
        {data.map(({ poster_path, id, name, title }) => (
          <li key={id} className={s.movies_item}>
            <Link to={`/movies/${id}`} className={s.link}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
                className={s.movies_img}
              />
              <p className={s.name} >{name !== undefined ? name : title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
