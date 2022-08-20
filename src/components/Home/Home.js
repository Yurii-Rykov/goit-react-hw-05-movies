import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Home.module.css';
import { API } from '../../services/api.js';
// const axios = require('axios').default;

const Home = () => {
  const [data, setData] = useState([]);

  API.trending().then(res => {
    setData(res.data.results);
  });

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

// https:api.themoviedb.org/3/movie/550?api_key=7e27a31a64f35e2d3f45ab72b99097a8