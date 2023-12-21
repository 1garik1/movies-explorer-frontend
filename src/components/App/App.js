import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {

  return (
    <main className="App">
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
   <Route path="*" element={(
          <>
            
            <NotFound />
          </>
        )} />
   
      </Routes>
    </main >
  );
}

export default App;
