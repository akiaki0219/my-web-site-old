import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import fetchVideoList from '../utils/fetchVideoList';
import {VideoObject} from '../types';
import {useState, useEffect} from 'react';
import AppHeader from '../App/AppHeader';
import VideoList from './VideoList';
import AppFooter from '../App/AppFooter';

function Video() {
  const [videoList, setVideoList] = useState<VideoObject[]>([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const videoList = await fetchVideoList();
      console.log("Video list fetched:", videoList)
      if (videoList) {
        setVideoList(videoList);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>
      <div className="container-fluid main-content pt-3">
        <h1>Video</h1>
        <VideoList videos={videoList}/>
      </div>
      <nav className="navbar footer navbar-dark bg-dark fixed-bottom">
        <AppFooter />
      </nav>
      <script src="main.js"></script>
    </div>
  );
}

export default Video;
