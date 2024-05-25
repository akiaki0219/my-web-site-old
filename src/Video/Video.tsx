import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import {latestAllVideoList, oldestAllVideoList} from '../utils/fetchVideoList';
import {VideoObject} from './types';
import {useState, useEffect} from 'react';
import AppHeader from '../App/AppHeader';
import SortandFilter from './SortandFilter';
import VideoList from './VideoList';
import AppFooter from '../App/AppFooter';

function Video() {
  const [videoList, setVideoList] = useState<VideoObject[]>([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const fetchVideoList = await latestAllVideoList();
      console.log("fetched Video list:", fetchVideoList);
      if (videoList) {
        const videoList = fetchVideoList as unknown as VideoObject[];
        setVideoList(videoList);
      }
    };
    fetchVideo();
  }, []);

  const applySortFilter = async (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[]) => {
    let NewVideoList: VideoObject[] | null = [];
    if (order==='oldest') {
      const fetchNewVideoList = await oldestAllVideoList();
      NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    }
    else {
      const fetchNewVideoList = await latestAllVideoList();
      NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    }
    
    if (NewVideoList) {
      NewVideoList = NewVideoList.filter(video => filterType.includes(video.type.name));
      NewVideoList = NewVideoList.filter(video => video.used.some(use => filterCharacter.includes(use.character.name)));
      console.log('Video list:', NewVideoList);
      setVideoList(NewVideoList);
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
        {videoList.length===0
          ? <div className="container">
              <h2>There is No Video</h2>
              <br/>
              <h5>Please retry after Changing search parameters.</h5>
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
