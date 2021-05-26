import './characteristics.scss';

const Characteristics = () => {

  return (
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
  );
};

export default Characteristics;
