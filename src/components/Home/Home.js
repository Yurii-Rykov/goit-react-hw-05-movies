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
  }, [])

  return (
    <>
      <h1 className={s.title}>Tranding today</h1>

      <ul>
        {data.map(({ poster_path, id, name, title }) => (
          <Link key={id} to={`/movies/${id}`}>
            <li> {name !== undefined ? name : title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;

