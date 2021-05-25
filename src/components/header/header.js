import logo from './logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="header__content">
        <a><img src={logo} alt="Avto Moto" width="134" height="55"/></a>
        <nav>
          <a href="#">Автомобили</a>
          <a href="#">Контакты</a>
          <a href="#">Услуги</a>
          <a href="#">Вакансии</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
