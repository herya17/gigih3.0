import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

function SongItem({ id, title, artist, isFavorite }) {
  return (
    <li id={id}>
      <div className="heylyn-app__img-song">
        <img data-src="./images/skeleton/placeholder.webp" src="./images/song-icons/heyca.webp" alt="" />
      </div>
      <div className="heylyn-app__title-song heylyn-app__list-title-song">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
      <button>
        {
          isFavorite
            ? <MdFavorite className="btn-favorite" />
            : <MdFavoriteBorder className="btn-favorite" />
        }
      </button>
      <button>
        <span className="material-symbols-outlined">
          more_vert
        </span>
      </button>
    </li>
  );
}

export default SongItem;
