import React from 'react';
import SongItem from './SongItem';

function ListSong({ song }) {
  return (
    <div className="heylyn-app__list-song">
      <ul>
        {
          song.map((song) => <SongItem key={song.id} {...song} />)
        }
      </ul>
    </div>
  );
}

export default ListSong;
