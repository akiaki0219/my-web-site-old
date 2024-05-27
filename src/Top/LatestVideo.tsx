import {fetchLatestVideo} from '../utils/fetchVideo';
import {LatestVideoObject} from '../Video/types';
import React, {useState, useEffect} from "react";

function LatestVideo() {
  const [latestVideo, setLatestVideo] = useState<LatestVideoObject>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const fetchVideo = await fetchLatestVideo();
      if (fetchVideo) {
        const latestVideo = fetchVideo as unknown as LatestVideoObject;
        console.log(latestVideo);
        setLatestVideo(latestVideo);
        setIsLoaded(true);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div>
      <h5>Latest Video</h5>
      {!isLoaded && <p>Now Loading...</p>}
      {latestVideo &&
        <div className="top-video-content row justify-content-center">
          <iframe
            id="player"
            title="LatestVideo"
            src={latestVideo.YouTube 
              ? `https://www.youtube.com/embed/${latestVideo.YouTube}`
              : `https://embed.nicovideo.jp/watch/sm${latestVideo.niconico}`}
            allowFullScreen
          />
        </div>
      }
    </div>
  );
};

export default LatestVideo;
