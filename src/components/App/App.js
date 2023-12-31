import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { } from 'react-router'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Popup from '../Popup/Popup'
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import MainApi from '../../utils/MainApi';
import Token from '../../utils/token';
import Preloader from '../Preloader/Preloader';
function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [LoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, []);

  function getUserInfo() {
    MainApi.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так! Ошибка сервера ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onRegister(formData) {
    MainApi.registerUser(formData)
      .then((res) => {
        if (res._id) {
          setPopupTitle('Вы успешно зарегистрировались!');
          setIsOpenPopup(true);
          onLogin(formData);
        }
      })
      .catch((err) => {
        setPopupTitle('Что-то пошло не так! Ошибка регистрации.');
        setIsOpenPopup(true);
      });
  }

  function onLogin(formData) {
    MainApi.loginUser(formData)
      .then(({ token }) => {
        if (token) {
          Token.saveToken(token);
          MainApi.updateToken();
          setLoggedIn(true);
          getUserInfo();
          navigate.push('/movies');
        }
      })
      .catch((err) => {
        setPopupTitle('Что-то пошло не так! Ошибка авторизации.');
        setIsOpenPopup(true);
      });
  }

  function openPopup(textError) {
    setPopupTitle(textError);
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
    setPopupTitle('');
  }

  function onSignOut() {
    Token.removeToken();
    setLoggedIn(false);
    localStorage.removeItem('films');
    localStorage.removeItem('filmsTumbler');
    localStorage.removeItem('filmsInputSearch');
    localStorage.removeItem('savedFilms');
    localStorage.removeItem('savedFilmsTumbler');
    localStorage.removeItem('savedFilmsInputSearch');
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>

      <main className="App">

        {
          pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
            <Header loggedIn={LoggedIn} isLoading={isLoading} /> : ''
        }
        <Routes>
          <Route path="/" element={
            <Main />
          } />
          <Route path="/movies" element={
            <ProtectedRoute
              loggedIn={LoggedIn}
              component={Movies}
              isLoading={isLoading}
              openPopup={openPopup}
            />
          } />

          <Route path="/saved-movies" element={
            <ProtectedRoute
              loggedIn={LoggedIn}
              component={SavedMovies}
              isLoading={isLoading}
              openPopup={openPopup}
            />
          } />

          <Route path="/profile" element={
            <ProtectedRoute
              loggedIn={LoggedIn}
              component={Profile}
              isLoading={isLoading}
              onSignOut={onSignOut}
              openPopup={openPopup}
            />
          } />
          <Route path='/signin' element={
            isLoading
              ? (<Preloader />)
              :
              !LoggedIn ? (<Login
                onLogin={onLogin}
              />)
                : (
                  <Navigate to='/movies' />)

          } />
          <Route path='/signup' element={
            isLoading
              ? (<Preloader />)
              :
              !LoggedIn ? (<Register
                onRegister={onRegister}
              />)
                : (
                  <Navigate to='/movies' />)

          } />
          <Route path="*" element={
            <NotFound />

          } />
        </Routes>

        <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />

      </main >

      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer /> : ''}



    </CurrentUserContext.Provider>
  );
}

export default App;
