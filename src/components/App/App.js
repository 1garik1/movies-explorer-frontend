import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(
          <>
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </>
        )} />
        <Route path="/movies" element={(
          <>
            <Header loggedIn={true} />
            <Movies />
            <Footer />
          </>
        )} />
        <Route path="/saved-movies" element={(
          <>
            <Header loggedIn={true} />
            <SavedMovies />
            <Footer />
          </>
        )} />

        <Route path="/signup" element={(
          <>
            <Register />
          </>
        )} />
        <Route path="/signin" element={(
          <>
            <Login />
          </>
        )} />

        <Route path="/profile" element={(
          <>
            <Header loggedIn={true} />
            <Profile />
          </>
        )} />
        <Route path="*" elemennt={(
          <>
            <PageNotFound />
          </>
        )} />
      </Routes>
    </div >
  );
}

export default App;
