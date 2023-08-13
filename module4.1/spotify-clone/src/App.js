import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';
import ListSong from './components/ListSong';
import ButtomNavigation from './components/ButtomNavigation';
import { allSong } from './utils/dataSong';

function App() {
  const favoriteSong = allSong.filter(song => song.isFavorite === true);
  const [isLogged, setIsLogged] = React.useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    setIsLogged(true);
  }

  return (
    <>
      <header>
        <div className="heylyn-app__logo">
          <h1>Heylyn</h1>
        </div>
        <Navigation />
      </header>
      <main>
        {
          isLogged 
            ?
              (<Routes>
                <Route path="/" element={<ListSong song={allSong} />} />
                <Route path="/favorite" element={<ListSong song={favoriteSong} />} />
                <Route path="/playlist" element={<p>Ini playlist</p>} />
              </Routes>)
            :
              (<Login loginHandler={loginHandler} />)
        }
      </main>
      <footer>
        <ButtomNavigation />
      </footer>
    </>
  );
}

export default App;
