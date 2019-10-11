import React from 'react';
import { Link } from 'react-router-dom';

export default function Alternatives() {
  return (
    <div className="App">
      {' '}
      <h1>
        This page provides some alternatives other than Youtube for movies and
        tvshows:
      </h1>
      <Link className="Link" to="notes">
        {' '}
        Alternative Notes:
      </Link>
      <br />
      <br />
      <Link className="Link" to="/tvshowlist/2/:internetarchive">
        {' '}
        Complete TV Series on Internet Archives:
      </Link>
      <br />
      <br />
      <Link className="Link" to="/movielist/2/:internetarchive">
        {' '}
        Movies on Internet Archives:
      </Link>
    </div>
  );
}
