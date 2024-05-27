import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/Video.css';
import {fetchLatestAllVideoList, fetchOldestAllVideoList} from '../utils/fetchVideo';
import {VideoObject} from './types';
import React, {useState, useEffect} from 'react';
import AppHeader from '../App/AppHeader';
import SortandFilter from './SortandFilter';
import VideoList from './VideoList';
import AppFooter from '../App/AppFooter';

function Video() {
  const [videoList, setVideoList] = useState<VideoObject[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const fetchVideoList = await fetchLatestAllVideoList();
      if (fetchVideoList) {
        const videoList = fetchVideoList as unknown as VideoObject[];
        setVideoList(videoList);
        setIsLoaded(true);
      }
    };
    fetchVideo();
  }, []);

  const applySortFilter = async (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]) => {
    let NewVideoList: VideoObject[] | null = [];
    if (order==='oldest') {
      const fetchNewVideoList = await fetchOldestAllVideoList();
      NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    }
    else {
      const fetchNewVideoList = await fetchLatestAllVideoList();
      NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    }
    
    if (NewVideoList) {
      NewVideoList = NewVideoList.filter(video => filterType.includes(video.type.name));
      NewVideoList = NewVideoList.filter(video => video.used.some(use => filterCharacter.includes(use.character.name)));
      NewVideoList = NewVideoList.filter(video => video.used.some(use => filterEngine.includes(use.engine.name)));
      console.log('Video list:', NewVideoList);
      setVideoList(NewVideoList);
      setIsLoaded(true);
    }
  }

  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>
      <div className="container-fluid main-content pt-3">
        <h1>Video List</h1>
        <SortandFilter applySortFilter={applySortFilter}/>
        {!isLoaded && <p>Now Loading...</p>}
        {videoList.length===0
          ? <div className="container">
              <h2>There is No Video</h2>
              <br/>
              <h5>Please try agein after Changing search parameters.</h5>
            </div>
          : <VideoList videos={videoList} />
        }  
      </div>
      <div className="navbar navbar-dark bg-dark">
        <AppFooter />
      </div>
      <script src="main.js"></script>
    </div>
  );
}

export default Video;
