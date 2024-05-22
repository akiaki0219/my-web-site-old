import {useState, useEffect} from "react";

const YOUTUBE_SEARCH_API_URL: string = process.env.REACT_APP_YOUTUBE_SEARCH_API_URL! as string;
const API_KEY: string = process.env.REACT_APP_API_KEY! as string;

function LatestVideo() {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const params = {
      key: API_KEY,
      channelId: "UCG6CzweaohMczHNS5tfI4UA",
      order: "date",
      type: "video",
      maxResults: "1",
    };
    const queryParams = new URLSearchParams(params);

    fetch(YOUTUBE_SEARCH_API_URL + queryParams)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("API success:", result);

          if (result.items && result.items.length !== 0) {
            setVideoId(result.items[0].id.videoId);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <iframe
      id="player"
      title="LatestVideo"
      width="640"
      height="360"
      src={"https://www.youtube.com/embed/" + videoId}
      allowFullScreen
    />
  );
};

export default LatestVideo;
