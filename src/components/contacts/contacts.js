import './contacts.scss';

const Contacts = () => {
  return (
    <div className="main__contacts">
      <div className="main__contacts-info">
        <p className="main__info-title">Адрес</p>
        <address className="main__info-description">
          <p>Санкт-Петербург,</p>
          <p className="main__info-description">набережная реки Карповки, дом 5</p></address>
        <p className="main__info-title">Режим работы</p>
        <p className="main__info-description">Ежедневно, с 10:00 до 21:00</p>
        <p className="main__info-title">Телефон</p>
        <a className="main__info-description" href="tel:88003335599">8 (800) 333-55-99</a>
        <p className="main__info-title">E-mail</p>
        <a className="main__info-description" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
      </div>
      <iframe className="main__info-map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7987.007622532461!2d30.298996199497346!3d59.96943874896851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINC90LDQsdC10YDQtdC20L3QsNGPINGA0LXQutC4INCa0LDRgNC_0L7QstC60LgsINC00L7QvCA1!5e0!3m2!1sru!2sru!4v1621691236526!5m2!1sru!2sru" width="431" height="271" style={{border: `0`}} allowFullScreen="" loading="lazy"></iframe>
    </div>
  );
};

export default Contacts;
