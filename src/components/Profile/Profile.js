import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {

  return (
    <section className="profile">
      <form className="profile__form">
        <h3 className="profile__greeting">Привет, Виталий!</h3>
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <div className="profile__area profile__area_type_name">
            <input className="profile__settings" placeholder="имя" defaultValue="Виталий" minlength="4"
              maxlength="15" required />
          </div>
          <div className="profile__area profile__area_type_email">
            <input className="profile__settings" placeholder="почта" minlength="10"
              maxlength="30" defaultValue="pochta@yandex.ru" required />
          </div>
          <p className="profile__text">E-mail</p>
        </div>
        <Link to="/profile" className="profile__button">Редактировать</Link>
        <Link to="/" className="profile__link">Выйти из аккаунта</Link>
      </form>
    </section>
  );
};

export default Profile;