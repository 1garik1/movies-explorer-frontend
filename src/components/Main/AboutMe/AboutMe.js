import "./AboutMe.css"
import { Link } from "react-router-dom";
import studentPhoto from "../../../images/avatar.jpg"
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <section className="about-me about-me_size_l" id="about-me">
      <SectionTitle>Студент</SectionTitle>
      <div className="about-me__info">
        <div className="about-me__info-container">
          <h3 className="about-me__info-title">Игорь</h3>
          <p className="about-me__info-subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info-description">Я&nbsp;родился и&nbsp;живу в&nbsp;Москве, высшее образование - менеджер по управлению персоналом.
            У&nbsp;меня есть жена. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
            Уже несколько лет увлекаюсь программированием. С&nbsp;2015 года работал в&nbsp;компании &laquo;ВСРФ&raquo;.</p>
          <Link to="https://github.com/1garik1" className="about-me__info-link link-hover"
            target="_blank">Github</Link>
        </div>
        <img className="about-me__photo" src={studentPhoto} alt="Фото студента" />
      </div>
    </section>
  )
}

export default AboutMe