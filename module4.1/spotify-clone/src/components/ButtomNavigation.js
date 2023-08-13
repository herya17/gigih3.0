import React from 'react';
import { MdFavorite, MdPlayArrow } from 'react-icons/md';

function ButtomNavigation() {
  return (
    <div className="heylyn-app__played">
      <div>
        <img data-src="./images/skeleton/placeholder.webp" src="./images/song-icons/heyca.webp" alt="" />
      </div>
      <div className="heylyn-app__title-song">
        <h3>Lover</h3>
        <p>Taylor Swift</p>
      </div>
      <button>
        <MdFavorite className="play-action-btn" />
      </button>
      <button>
        <MdPlayArrow className="play-action-btn play" />
      </button>
    </div>
  );
}

export default ButtomNavigation;
