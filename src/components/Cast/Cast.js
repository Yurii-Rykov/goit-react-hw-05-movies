import { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';
const axios = require('axios').default;


const Cast = () => {
    const { movieId } = useParams();
    const [hero, setHero] = useState([])

    useEffect(() => {
        async function castApi() {
          try {
            const response = await axios({
              method: 'get',
              url: `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US`,
            });
            return response;
          } catch (error) {
            console.log(error);
          }
        }
    
        castApi().then(res => setHero(res.data.cast));
        //eslint-disable-next-line
      }, []);
    
    return(
    // console.log(hero)
    <>
    <ul>
       {hero.map(el => (
            <li key={el.id}>
                <img src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`} alt='el.name' />
                <h3>{el.name}</h3>
                <p>Character: {el.character}</p>
            </li>
       ))}
    </ul>   
    </>   
    )
}
export default Cast;