import React from 'react';
import VideoPlayer from 'react-background-video-player';
import video from '../image/video.mp4';

const mainmenu = {
  width: '2430px',
  height: '790px',
  top: '65%',
  border: '1px solid',
  margin: '-300px 0 0 -500px'
};

export default function About() {
  return (
    <div className="App">
      <h1>
        This App shows what movies and tvshows are available on Youtube and
        other sites. This is an ever changing list where movies will be removed
        and added based on availability on these sites. This list is not
        definitive.
      </h1>
      <br />
      <hr />
      <VideoPlayer style={mainmenu} src={video} autoPlay={true} muted={true} />
    </div>
  );
}
