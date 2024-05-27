import React from 'react';

type StatenicoVideoPlayer = {
  niconico: string;
}

function NicoVideoPlayer({niconico}: StatenicoVideoPlayer) {
  return (
    <div className="row justify-content-center">
      <iframe className="video-player"
        id="player"
        title="niconico"
        src={`https://embed.nicovideo.jp/watch/sm${niconico}`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default NicoVideoPlayer
