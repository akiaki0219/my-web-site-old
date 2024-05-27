import React from 'react';

type StateYouTubePlayer = {
  YouTube: string;
}

function YouTubePlayer({YouTube}: StateYouTubePlayer) {
  return (
    <div className="row justify-content-center">
      <iframe className="video-player"
        id="player"
        title="YouTube"
        src={`https://www.youtube.com/embed/${YouTube}`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default YouTubePlayer
