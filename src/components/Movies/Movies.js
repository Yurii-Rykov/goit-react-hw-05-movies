import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify'
const axios = require('axios').default;

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

    async function movieApi() {
      try {
        const response = await axios({
          method: 'get',
          url: `https://api.themoviedb.org/3/search/movie?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1&query=${word}&include_adult=false`,
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    movieApi().then(res => setMovies(res.data.results));
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
            return <li key={el.id}><Link key={el.id} to={`/movies/${el.id}`}>{el.title}</Link></li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
