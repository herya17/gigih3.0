import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="heylyn-app__navbar">
      <ul>
        <li>
          <h2>
            <Link to="/" className={pathname === '/' ? 'active' : null}>All Music</Link>
            {
              pathname === '/' ? <hr /> : null
            }
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/favorite" className={pathname === '/favorite' ? 'active' : null}>Favorite</Link>
            {
              pathname === '/favorite' ? <hr /> : null
            }
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/playlist" className={pathname === '/playlist' ? 'active' : null}>Playlist</Link>
            {
              pathname === '/playlist' ? <hr /> : null
            }
          </h2>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
