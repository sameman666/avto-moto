import './main.scss';

const Header = () => {
  return (
    <main className="main">
      <div className="main__content">
        <section className="main__slider">
          <h2>Здесь будет слайдер</h2>
        </section>
        <section className="main__description">
          <h1>Марпех 11</h1>
          <ul className="main__advantages-list">
            <li className="main__advantages-list-item main__advantages-list-item--gasoline">Бензин</li>
            <li className="main__advantages-list-item main__advantages-list-item--manual-transmission">Механика</li>
            <li className="main__advantages-list-item main__advantages-list-item--horsepower">100 л.с</li>
            <li className="main__advantages-list-item main__advantages-list-item--engine-volume">1.4 л</li>
          </ul>
          <div className="main__prices">
            <h2 className="main__current-price">2 300 000 ₽</h2>
            <h4 className="main__old-price">2 400 000 ₽</h4>
          </div>
          <div className="main__buttons">
            <button className="main__request-button">Оставить заявку</button>
            <button className="main__credit-button">В кредит от 11000 рублей</button>
          </div>
        </section>
        <section className="main__tabs">
          <ul className="main__tabs-list">
            <li className="main__tabs-list-item main__tabs-list-item--active"><button>Характеристики</button></li>
            <li className="main__tabs-list-item"><button>Отзывы</button></li>
            <li className="main__tabs-list-item"><button>Контакты</button></li>
          </ul>
          <ul className="main__characteristics-list">
            <li className="main__characteristics-list-item">
              <p>Трансмиссия</p>
              <p>Роботизированная</p>
            </li>
            <li className="main__characteristics-list-item">
              <p>Мощность двигателя, л.с.</p>
              <p>249</p>
            </li>
            <li className="main__characteristics-list-item">
              <p>Тип двигателя</p>
              <p>Бензиновый</p>
            </li>
            <li className="main__characteristics-list-item">
              <p>Привод</p>
              <p>Полный</p>
            </li>
            <li className="main__characteristics-list-item">
              <p>Объем двигателя, л</p>
              <p>2.4</p></li>
            <li className="main__characteristics-list-item">
              <p>Макс. крутящий момент</p>
              <p>370/4500</p>
            </li>
            <li className="main__characteristics-list-item">
              <p>Количество цилиндров</p>
              <p>4</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Header;
