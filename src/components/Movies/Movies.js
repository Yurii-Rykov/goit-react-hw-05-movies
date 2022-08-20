import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../services/api.js';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [word, setWord] = useState('');

  const nameSearch = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const submitSerch = event => {
    event.preventDefault();

    if (search.trim() === '') {
      //  toast.info('Enter images!')
      alert('no');
      return;
    }
    setWord(search);
    setSearch('');
  };

  useEffect(() => {
    if (word === '') {
      return;
    }

    API.movie(word).then(res => setMovies(res.data.results));
  }, [word]);

  return (
    <div>
      <form onSubmit={submitSerch}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          onChange={nameSearch}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length && (
        <ul>
          {movies.map(el => {
            return (
              <li key={el.id}>
                <Link key={el.id} to={`/movies/${el.id}`}>
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
