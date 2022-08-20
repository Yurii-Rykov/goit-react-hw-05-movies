import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/api.js';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.reviews(movieId).then(res => setReviews(res.data.results));
    //eslint-disable-next-line
  }, []);

  return (
    <section>
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Reviews;
