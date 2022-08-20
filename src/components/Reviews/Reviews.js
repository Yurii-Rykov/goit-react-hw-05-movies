import { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';
const axios = require('axios').default;


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function reviewsApi() {
          try {
            const response = await axios({
              method: 'get',
              url: `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7e27a31a64f35e2d3f45ab72b99097a8&language=en-US&page=1`,
            });
            return response;
          } catch (error) {
            console.log(error);
          }
        }
    
        reviewsApi().then(res => setReviews(res.data.results));
        //eslint-disable-next-line
      }, []);
    
    return(
    // console.log(reviews)
    <section>
    {reviews.length === 0 && (
      <p>We don't have any reviews for this movie.</p>
    )}
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  </section> 
    )
}
export default Reviews;