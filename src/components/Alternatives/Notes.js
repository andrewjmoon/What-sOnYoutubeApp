import React from 'react';

export default function Notes() {
  return (
    <div className="App">
      Alternative Notes:
      <p className="Link">
        The Internet Archives is another great place to find movies and tvshows
        online. One can also use Airplay and Chromecast to access the
        movies/tvshows on your TV. On the Alternative home page there are lists
        of movies and tvshows available on the website. These links are subject
        to change and may not be available in the future.
      </p>
      <br />
      <br />
      <p className="Link">
        Crackle is another good choice for tvshows and movies from Sony
        Productions. Here is the link to the SonyCrackle website.{' '}
        <a
          style={{ color: 'black' }}
          href="https://www.sonycrackle.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <br />
          https://www.sonycrackle.com/
        </a>
      </p>
    </div>
  );
}
