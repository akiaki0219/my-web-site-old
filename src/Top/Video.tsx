import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React from 'react';
import LatestVideo from "./LatestVideo";
import TopVideo from './TopVideo';

function Video() {
  return (
    <div>
      <h4>Recommended Videos</h4>
      <div className="row">
        <div className="col-6">
          <LatestVideo />
        </div>
        <div className="col-6">
          <TopVideo />
        </div>
      </div>
      <h5>More Videos:
        <a className="btn btn-primary link" href={'/video'}>Video List</a>
      </h5>
    </div>
  );
}

export default Video;
