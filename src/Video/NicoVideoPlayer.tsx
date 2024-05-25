import {VideoObject} from './types';

type StatenicoVideoPlayer = {
  NicoVideo: VideoObject;
}

function NicoVideoPlayer({NicoVideo}: StatenicoVideoPlayer) {
  return (
    <div className="container">
      <iframe className="d-none d-md-block"
        id="player"
        title="niconico"
        width="426"
        height="240"
        src={`https://embed.nicovideo.jp/watch/sm${NicoVideo.niconico}`}
        allowFullScreen
      />
      <iframe className="d-block d-md-none"
        id="player"
        title="niconico"
        width="256"
        height="144"
        src={`https://ext.nicovideo.jp/thumb/sm${NicoVideo.niconico}`}
        allowFullScreen>
        <a href={`https://www.nicovideo.jp/watch/sm${NicoVideo.niconico}`}>{NicoVideo.title}</a>
      </iframe>
    </div>
  );
};

export default NicoVideoPlayer
