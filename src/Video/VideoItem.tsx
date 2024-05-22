import {VideoObject} from '../types';
type StateVideoItem = {
  video: VideoObject;
}

function VideoItem({video}: StateVideoItem) {
  return (
    <div>
      <h2>{video.title}</h2>
      <p>{video.type}</p>
      <a href={video.YouTube}>{video.YouTube}</a>
      <br />
      <a href={video.niconico}>{video.niconico}</a>
    </div>
  );
};

export default VideoItem
