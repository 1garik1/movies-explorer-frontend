import Form from '../Form/Form';

function Register() {
  return (
    <Form header="Добро пожаловать!" submit="Зарегистрироваться" question="Уже зарегистрированы?" link="Войти" path="/signin">
      <label className="form__item">
        <p className="form__item-text">Имя</p>
        <input type="text" className="form__field" minlength="4"
          maxlength="15" placeholder="Виталий" required />
        <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input type="email" className="form__field" placeholder="pochta@yandex.ru" minlength="10"
          maxlength="30" required />
        <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input type="password" className="form__field form__field_color-error" minlength="8"
          maxlength="20" placeholder="пароль" required />
        <p className="form__error form__error-display">Что-то пошло не так...</p>
      </label>
    </Form>
  );
}

export default Register;