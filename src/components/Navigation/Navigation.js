import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from '../../images/icon-account.svg'
const Navigation = () => {
    const [showItems, setShowItems] = useState(false);

    const handleToggleMenu = () => setShowItems(!showItems);

    return (
        <nav className="navigation">
            <button className="navigation__btn-menu" type="button" onClick={handleToggleMenu}></button>
            <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`}>
                <div className="navigation__sidebar">
                    <div className="navigation__list-container">
                        <button className="navigation__btn-close" type="button" onClick={handleToggleMenu}></button>
                        <ul className="navigation__list">
                            <li className="navigation__list-item navigation__list-item_type_main">
                                <Link to="/" className="navigation__link">Главная</Link>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                            </li>
                            <li className="navigation__list-item">
                                <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/profile" className="navigation__link navigation__link_type_profile">
                        <p className="navigation__p">Аккаунт</p> 
                        <img alt='1' src={image}/>
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;