import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../services/api.js';
import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [word, setWord] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const nameSearch = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const submitSerch = event => {
    event.preventDefault();

    if (search.trim() === '') {
      toast.info('Enter movie title');
      return;
    }

    setSearchParams({ query: search });
    setWord(search);
    setSearch('');
  };

  useEffect(() => {
    const query = searchParams.get('query') || '';
    if (query !== word) {
      setWord(query);
    }
    if (word === '') {
      return;
    }
    setLoading(true);
    API.movie(word).then(res => {
      setMovies(res.data.results)
      setLoading(false);
    });

  }, [word, searchParams]);

  return (
    <div className={s.wrapper}>
      <form onSubmit={submitSerch} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          onChange={nameSearch}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      {movies.length > 0 && (
        <ul className={s.list}>
          {movies.map(({id, poster_path, title}) => {
            const path = poster_path
            ? `https://image.tmdb.org/t/p/w200/${poster_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg';
  
            return (
              <Link key={id} to={`/movies/${id}`} className={s.link}>
                <li key={id} className={s.item}>
                  <img
                    src={path}
                    alt={title}
                    className={s.movies_img}
                  />
                  <p className={s.name}>{title}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
      {loading && <Loader />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Movies;
