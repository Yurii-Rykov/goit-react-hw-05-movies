import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader'
import s from './Home.module.css';
import { API } from '../../services/api';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.trending().then(res => {
      setData(res.data.results);
      setLoading(false)
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
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                className={s.movies_img}
              />
              <p className={s.name} >{name !== undefined ? name : title}</p>
            </Link>
          </li>
        ))}
      </ul>
      {loading && <Loader />}
    </>
  );
};

export default Home;
