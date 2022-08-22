import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/api.js';
import s from './Reviews.module.css'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.reviews(movieId).then(res => setReviews(res.data.results));
    //eslint-disable-next-line
  }, []);

  return (
    <section className={s.wrapper}>
      {reviews.length === 0 && <p className={s.warning}>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={s.item}>
            <h2 className={s.title}>Author: <span className={s.span}>{author}</span></h2>
            <p className={s.text}>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Reviews;
