import '../css/Video.css'
import React from 'react';
import {VideoObject} from './types';
import YouTubePlayer from './YouTubePlayer';
import NicoVideoPlayer from './NicoVideoPlayer';

type StateVideoPageItem = {
  video: VideoObject;
}

function VideoPageItem({video}: StateVideoPageItem) {
  return(
    <div className="container-fluid">
      <div className="container-fluid pt-3">
        <h1 className="d-block d-lg-none video-h1">{video.title}</h1>
        <div className="row p-5 justify-content-center">
          <div className="col-lg">
            {(() => {
              if (video.YouTube) {
                return (
                  <div className="row justify-content-center">
                    <YouTubePlayer YouTube={video.YouTube} key={video.id}/>
                  </div>
                );}})()}
            {(() => {
              if (video.niconico) {
                return (
                  <div className="row justify-content-center">
                    <NicoVideoPlayer niconico={video.niconico} key={video.id}/>
                  </div>
                );}})()}
          </div>
          <div className="col-lg">
            <h1 className="d-none d-lg-block video-h1-lg">{video.title}</h1>
            <h3>Type: {video.type.name}</h3>
            <h3>Posted: {video.posted_at.toString()}</h3>
            <div className="row justify-content-center">
              <h3 className="col-5 video-character">Character: </h3>
              <div className="col-5 video-character-list">
                {video.used.map((number) => <h3>{number.character.name} ({number.engine.name})</h3>)}
              </div>
            </div>
            <div className="row justify-content-center">
              {video.YouTube && 
                <a className="col-2 btn btn-danger video-link" href={`https://youtu.be/${video.YouTube}`}>YouTube</a>
              }
              {video.niconico && 
                <a className="col-2 btn btn-light video-link" href={`https://nico.ms/sm${video.niconico}`}>niconico</a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPageItem;
