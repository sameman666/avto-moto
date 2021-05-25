import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';
import './popup.scss';

const Popup = (props) => {

  const {state, onKeyDownHandler, onCloseReviewsFormHandler, onFormSubmitHandler, pluses, minuses, name, comment, onRatingHandler} = props;

  return (
    <div onKeyDown={onKeyDownHandler} tabIndex={0} onClick={onCloseReviewsFormHandler} className="main__popup-overlay">
      <div className="main__popup">
        <div className="main__popup-head">
          <h3>Оставить отзыв</h3>
          <button className="main__popup-head-close-button" type="button" onClick={onCloseReviewsFormHandler}></button>
        </div>
        <form onSubmit={onFormSubmitHandler} action="https://echo.htmlacademy.ru" className="main__popup-form">
          <div className="main__popup-data">
            <div className="main__popup-data-block">
              {state.isValidName === false && <p className="main__popup-data-required-field">Пожалуйста, заполните это поле</p>}
              <input className={state.isValidName ? `` : `main__popup-input-error`} type="text" name="name" id="name" placeholder="Имя" ref={name} autoFocus={true}/>
              <label htmlFor="name"></label>
              <input type="text" name="pluses" id="pluses" placeholder="Достоинства" ref={pluses} />
              <label htmlFor="pluses"></label>
              <input type="text" name="minuses" id="minuses" placeholder="Недостатки" ref={minuses}/>
              <label htmlFor="minuses"></label>
            </div>
            <div className="main__popup-data-block">
              <div className="main__popup-data-block-rating">
                <p>Оцените товар:</p>
                <div className="main__popup-data-block-rating-stars">
                  <ReactStars
                    name="rate1"
                    count={5}
                    onChange={onRatingHandler}
                    size={35}
                    isHalf={false}
                    value={state.rating}
                    color={`rgba(189, 190, 194, 0.7)`}
                    activeColor={`#D12136`}
                  />
                </div>
              </div>
              {state.isValidComment === false && <p className="main__popup-data-required-field">Пожалуйста, заполните это поле</p>}
              <textarea className={state.isValidComment ? `` : `main__popup-input-error`} name="comment" id="comment" placeholder="Комментарий" ref={comment}></textarea>
              <label htmlFor="comment" title="Комментарий"></label>
            </div>
          </div>
          <button className="main__popup-submit-button button-primary" type="submit">Оставить отзыв</button>
        </form>
      </div>
    </div>
  );
};

Popup.propTypes = {
  state: PropTypes.object,
  onKeyDownHandler: PropTypes.func,
  onCloseReviewsFormHandler: PropTypes.func,
  onFormSubmitHandler: PropTypes.func,
  pluses: PropTypes.object,
  minuses: PropTypes.object,
  name: PropTypes.object,
  comment: PropTypes.object,
  onRatingHandler: PropTypes.func,
};

export default Popup;
