import '../css/App.css';
import '../css/Video.css';
import {VideoObject} from './types';
import YouTubePlayer from './YouTubePlayer';
import NicoVideoPlayer from './NicoVideoPlayer';

type StateVideoPageItem = {
  video: VideoObject;
}

function VideoPageItem({video}: StateVideoPageItem) {
  return(
    <div className="container">
      <div className="container-fluid main-content pt-3">
        <h1>{video.title}</h1>
        <div className="row p-5 justify-content-center">
          <div className="col-lg">
            {(() => {
                if (video.YouTube) {
                  return (
                    <YouTubePlayer YouTube={video.YouTube} key={video.id} />
                  );}
            })()}
            {(() => {
                if (video.niconico) {
                  return (
                    <NicoVideoPlayer NicoVideo={video} key={video.id} />
                  );}
            })()}
          </div>
          <div className="col-lg">
          <h5>Type: {video.type.name}</h5>
            <h5>Posted: {video.posted_at.toString()}</h5>
            <div className="row justify-content-center">
              <h5 className="col">Character: </h5>
              <div className="col">
                {video.used.map((number) => <p>{number.character.name}</p>)}
              </div>
            </div>
            {video.YouTube && 
              <a className="btn btn-danger link" href={`https://youtu.be/${video.YouTube}`}>YouTube</a>
            }
            <br/>
            {video.niconico && 
              <a className="btn btn-light link" href={`https://nico.ms/sm${video.niconico}`}>niconico</a>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPageItem;
