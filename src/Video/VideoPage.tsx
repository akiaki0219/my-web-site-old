import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '../App/AppHeader';
import AppFooter from '../App/AppFooter';
import VideoPageItem from './VideoPageItem';
import {fetchLatestAllVideoList} from '../utils/fetchVideo';
import {VideoObject} from './types';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';

type Params = {
  id: string;
}

function VideoPage() {
  const {id} = useParams<Params>();
  const [filteredVideo, setFilterVideo] = useState<VideoObject | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const fetchVideoList = await fetchLatestAllVideoList();
      const videoList = fetchVideoList as unknown as VideoObject[];
      console.log("Video list:", videoList);
      if (videoList) {
        const filteredVideo = videoList.find((video) => video.id===Number(id));
        setFilterVideo(filteredVideo || null);
        setIsLoaded(true);
      }
    };
    fetchVideo();
  }, [id]);

  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>
      {isLoaded && <p>Now Loading...</p>}
      {filteredVideo? (
        <VideoPageItem video={filteredVideo} key={filteredVideo.id}/>
      ) : (
        <h2 className="container-fluid pt-3">There is No Video</h2>
      )}
      <div>
        <h5>Back to Video List: 
          <a className="btn btn-primary video-link" href={'/video'}>Video List</a>
        </h5>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <AppFooter />
      </nav>
      <script src="main.js"></script>
    </div>
  );
}

export default VideoPage;
