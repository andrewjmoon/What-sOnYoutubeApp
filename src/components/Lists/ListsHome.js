import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="App">
      <h1>The Youtube List Home:</h1>
      <hr />
      <Link className="Link" to="/movielist/1/suspense">
        {' '}
        Movies on Youtube
      </Link>
      <br />
      <Link className="Link" to="/tvshowlist/1/shows">
        {' '}
        TV Shows on Youtube
      </Link>
      <br />
      <Link className="Link" to="/tvshowlist/3/shows">
        {' '}
        Halloween Specials
      </Link>
      <br />
      <Link className="Link" to="/tvshowlist/4/shows">
        {' '}
        Christmas Specials
      </Link>
    </div>
  );
};
