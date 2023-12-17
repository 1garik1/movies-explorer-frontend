import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент Practicum</h2>

      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Игорь</h3>
          <p className="about-me__job">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__description">
          Давно мечтал стать веб-разработчиком, прошел обучение в яндекс.Практикум.  
          </p>

          <ul className="about-me__links">
            <li><a className="about-me__link" href="#" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a className="about-me__link" href="#" target="_blank" rel="noreferrer">Github</a></li>

          </ul>
        </div>

        <img src={avatar} alt="about-me" className="about-me__image" />
      </div>
    </section>
  );
};

export default AboutMe;