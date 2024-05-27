import '../css/Top.css';
import React, {useState, useEffect} from "react";

const YOUTUBE_SEARCH_API_URL: string = process.env.REACT_APP_YOUTUBE_SEARCH_API_URL! as string;
const API_KEY: string = process.env.REACT_APP_API_KEY! as string;

function TopVideo() {
  const [videoId, setVideoId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const params = {
      key: API_KEY,
      channelId: "UCG6CzweaohMczHNS5tfI4UA",
      order: "viewCount",
      type: "video",
      maxResults: "1",
    };
    const queryParams = new URLSearchParams(params);

    fetch(YOUTUBE_SEARCH_API_URL + queryParams)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.items && result.items.length !== 0) {
            setVideoId(result.items[0].id.videoId);
            setIsLoaded(true);
          }
        })
      .catch(
        (error) => {
          console.error(error);
        });
  }, []);

  return (
    <div>
      <h5>Top Video (based on YouTube data)</h5>
      {!isLoaded && <p>Now Loading...</p>}
      <div className="top-video-content row justify-content-center">
        <iframe
          id="player"
          title="TopVideo"
          src={"https://www.youtube.com/embed/"+videoId}
          allowFullScreen
        />       
      </div>
    </div>
  );
};

export default TopVideo;
