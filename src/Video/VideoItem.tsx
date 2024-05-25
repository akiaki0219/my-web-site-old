import '../css/Video.css';
import {VideoObject} from './types';
import YouTubePlayer from './YouTubePlayer';
import NicoVideoPlayer from './NicoVideoPlayer';

type StateVideoItem = {
  video: VideoObject;
}

function VideoItem({video}: StateVideoItem) {
  return (
    <div className="video-content container">
      <div className="row p-5 justify-content-center">
        <div className="col-lg">
          {video.YouTube? (
            <YouTubePlayer YouTube={video.YouTube} key={video.id} />
          ) : (
            <NicoVideoPlayer NicoVideo={video} key={video.id} />
          )}
        </div>
        <div className="col-lg">
          <h2>{video.title}</h2>
          <h5>Type: {video.type.name}</h5>
          {video.YouTube && 
            <a className="btn btn-danger link" href={`https://youtu.be/${video.YouTube}`}>YouTube</a>
          }
          <br/>
          {video.niconico && 
            <a className="btn btn-light link" href={`https://nico.ms/sm${video.niconico}`}>niconico</a>
          }
          <div>
            <h5>More Information: 
              <a className="btn btn-primary link" href={`/video/${video.id}`}>Individual Page</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem
