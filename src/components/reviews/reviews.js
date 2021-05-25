import './reviews.scss';
import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';

const Reviews = (props) => {

  const {reviews, onOpenReviewsFormHandler} = props;

  return (
    <div className="main__reviews">
      <button className="main__review-button button-frame" type="button" onClick={onOpenReviewsFormHandler}>Оставить отзыв</button>
      <ul className="main__reviews-list">
        {reviews.map((review, index) =>
          <li key={index} className="main__reviews-list-item">
            <h3>{review.name}</h3>
            <div className="main__reviews-pluses">
              <p className="main__reviews-list-item-title">Достоинства</p>
              <p className="main__reviews-list-item-description">{review.pluses}</p>
            </div>
            <div className="main__reviews-minuses">
              <p className="main__reviews-list-item-title">Недостатки</p>
              <p className="main__reviews-list-item-description">{review.minuses}</p>
            </div>
            <p className="main__reviews-list-item-title">Комментарий</p>
            <p className="main__reviews-list-item-description">{review.comment}</p>
            <div className="main__reviews-list-item-rating">
              <ReactStars
                name="rate2"
                count={5}
                size={25}
                isHalf={false}
                edit={false}
                value={review.rating}
                color={`rgba(189, 190, 194, 0.7)`}
                activeColor={`#D12136`}
              />
              <a href="#">Советует</a>
            </div>
            <div className="main__reviews-list-item-time">
              <p>1 минуту назад</p>
              <a href="#">Ответить</a>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pluses: PropTypes.string,
    minuses: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string
  })),
  onOpenReviewsFormHandler: PropTypes.func,
};
