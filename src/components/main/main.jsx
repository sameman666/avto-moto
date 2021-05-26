import {useState, useRef, useEffect} from 'react';
import './main.scss';
import slide1 from './slide_1.jpg';
import slide1Min from './slide_1_min.jpg';
import slide2Min from './slide_2_min.jpg';
import slide3Min from './slide_3_min.jpg';
import slide2 from './slide_2.jpg';
import slide3 from './slide_3.jpg';
import Popup from '../popup/popup';
import Characteristics from '../characteristics/characteristics';
import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';
// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation]);

const DEFAULT_RATING = 3;
const ESCAPE_KEYCODE = 27;
const MOCK_REVIEWS = [
  {
    name: `Борис Иванов`,
    pluses: `Мощность, внешний вид`,
    minuses: `Слабые тормозные колодки (пришлось заменить)`,
    rating: 3,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`
  },
  {
    name: `Марсель Исмагилов`,
    pluses: `Cтиль, комфорт, управляемость`,
    minuses: `Дорогой ремонт и обслуживание`,
    rating: 3,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`
  }
];
const Tab = {
  CHARACTERISTICS: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`
};


const Main = () => {

  const initialState = {
    reviews: MOCK_REVIEWS,
    isReviewFormOpen: false,
    isCharacteristicsTabOpen: true,
    isReviewsTabOpen: false,
    isContactsTabOpen: false,
    rating: DEFAULT_RATING,
    isValidName: true,
    isValidComment: true,
  };

  const [state, setState] = useState(initialState);

  const name = useRef();
  const pluses = useRef();
  const minuses = useRef();
  const comment = useRef();

  useEffect(() => {
    setState({
      ...state,
      localStorage: {
        name: localStorage.getItem(`name`),
      }
    });
  }, []);

  const tabsHandler = (evt) => {
    const tab = evt.target.textContent;
    switch (tab) {
      case Tab.CHARACTERISTICS: {
        setState({
          ...state,
          isCharacteristicsTabOpen: true,
          isReviewsTabOpen: false,
          isContactsTabOpen: false,
        });
        break;
      }
      case Tab.REVIEWS: {
        setState({
          ...state,
          isCharacteristicsTabOpen: false,
          isReviewsTabOpen: true,
          isContactsTabOpen: false,
        });
        break;
      }
      case Tab.CONTACTS: {
        setState({
          ...state,
          isCharacteristicsTabOpen: false,
          isReviewsTabOpen: false,
          isContactsTabOpen: true,
        });
        break;
      }
    }
  };

  const openReviewsFormHandler = () => {
    setState({
      ...state,
      isReviewFormOpen: true,
    });
    document.body.classList.add(`popup-opened`);
  };

  const closeReviewsFormHandler = (evt) => {
    if (evt.target.className === `main__popup-head-close-button` || evt.target.className === `main__popup-overlay`) {
      setState({
        ...state,
        isReviewFormOpen: false,
      });
      document.body.classList.remove(`popup-opened`);
    }
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (!name.current.value) {
      setState({
        ...state,
        isValidName: false
      });
      return;
    }
    if (!comment.current.value) {
      setState({
        ...state,
        isValidComment: false
      });
      return;
    }
    setState({
      ...state,
      reviews: [
        ...state.reviews,
        {
          name: name.current.value,
          pluses: pluses.current.value,
          minuses: minuses.current.value,
          rating: state.rating,
          comment: comment.current.value
        }
      ],
      isReviewFormOpen: false,
      isValidName: true,
      isValidComment: true
    });
    // localStorage.setItem(`name`, name.current.value);
    // localStorage.setItem(`pluses`, pluses.current.value);
    // localStorage.setItem(`minuses`, minuses.current.value);
    // localStorage.setItem(`comment`, comment.current.value);
    localStorage.clear();
    document.body.classList.remove(`popup-opened`);
  };

  const ratingHandler = (nextValue) => {
    setState({
      ...state,
      rating: nextValue,
    });
  };

  const keyDownHandler = (evt) => {
    if (evt.keyCode === ESCAPE_KEYCODE) {
      setState({
        ...state,
        isReviewFormOpen: false,
      });
      document.body.classList.remove(`popup-opened`);
    }
  };

  return (
    <main className="main">
      <div className="main__content">
        <section className="main__slider">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: `.main__slider-arrow--right`,
              prevEl: `.main__slider-arrow--left`
            }}
          >
            <SwiperSlide>
              <img src={slide1} alt="Слайд 1" width="600" height="375" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="Слайд 2" width="600" height="375" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="Слайд 3" width="600" height="375" />
            </SwiperSlide>
          </Swiper>
          <div className="main__slider-cotrols">
            <button className="main__slider-arrow main__slider-arrow--left" type="button" aria-label="Листать влево"></button>
            <div className="main__slider-controls-thumbs">
              <Swiper
                spaceBetween={25}
                slidesPerView={3}
                draggable={false}
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <img src={slide1Min} alt="Слайд 1" width="128" height="80" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide2Min} alt="Слайд 2" width="128" height="80" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide3Min} alt="Слайд 3" width="128" height="80" />
                </SwiperSlide>
              </Swiper>
            </div>
            <button className="main__slider-arrow main__slider-arrow--right" type="button" aria-label="Листать вправо"></button>
          </div>
        </section>
        <section className="main__description">
          <h1>Марпех 11</h1>
          <ul className="main__advantages-list">
            <li className="main__advantages-list-item main__advantages-list-item--gasoline">бензин</li>
            <li className="main__advantages-list-item main__advantages-list-item--manual-transmission">механика</li>
            <li className="main__advantages-list-item main__advantages-list-item--horsepower">100 л.с</li>
            <li className="main__advantages-list-item main__advantages-list-item--engine-volume">1.4 л</li>
          </ul>
          <div className="main__prices">
            <h2 className="main__current-price">2 300 000 ₽</h2>
            <span className="main__old-price">2 400 000 ₽</span>
          </div>
          <div className="main__buttons">
            <button className="main__request-button button-primary">Оставить заявку</button>
            <button className="main__credit-button button-frame">В кредит от 11 000 ₽</button>
          </div>
        </section>
        <section className="main__tabs">
          <ul className="main__tabs-list">
            <li className={`main__tabs-list-item ${state.isCharacteristicsTabOpen ? ` main__tabs-list-item--active` : ``}` }><button onClick={tabsHandler}>Характеристики</button></li>
            <li className={`main__tabs-list-item ${state.isReviewsTabOpen ? ` main__tabs-list-item--active` : ``}` }><button onClick={tabsHandler}>Отзывы</button></li>
            <li className={`main__tabs-list-item ${state.isContactsTabOpen ? ` main__tabs-list-item--active` : ``}` }><button onClick={tabsHandler}>Контакты</button></li>
          </ul>
          {state.isContactsTabOpen && <Contacts />}
          {state.isCharacteristicsTabOpen && <Characteristics />}
          {state.isReviewsTabOpen && <Reviews reviews={state.reviews} onOpenReviewsFormHandler={openReviewsFormHandler}/>}
        </section>
      </div>

      {state.isReviewFormOpen &&
        <Popup
          state={state}
          onKeyDownHandler={keyDownHandler}
          onCloseReviewsFormHandler={closeReviewsFormHandler}
          onFormSubmitHandler={formSubmitHandler}
          pluses={pluses}
          minuses={minuses}
          name={name}
          comment={comment}
          onRatingHandler={ratingHandler}
        />
      }
    </main>
  );
};

export default Main;
