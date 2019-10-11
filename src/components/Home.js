import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from 'react-background-video-player';
import video from '../image/space.mp4';

const mainmenu = {
  width: '2430px',
  height: '790px',
  top: '55%',
  border: '1px solid',
  margin: '-300px 0 0 -500px',
  paddingTop: '60px'
};

export default () => {
  return (
    <div className="App2">
      What's on Youtube HomePage: {'    '}
      <Link className="Link" to="/youtubeplayer">
        YoutubePlayer,
      </Link>
      {'    '}
      <Link className="Link" to="/about">
        About,
      </Link>
      {'    '}
      <Link className="Link" to="/resources">
        Resources,
      </Link>
      {'    '}
      <Link className="Link" to="/listhome">
        Youtube ListHome
      </Link>
      {'    '}
      <br />
      <hr />
      <VideoPlayer style={mainmenu} src={video} autoPlay={true} muted={true} />
    </div>
  );
};
