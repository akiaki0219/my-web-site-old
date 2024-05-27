import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LatestVideo from "./LatestVideo";
import TopVideo from './TopVideo';

function Video() {
  return (
    <div>
      <h4>Recommended Videos</h4>
      <div className="d-block d-xl-none">
        <div className="row">
          <LatestVideo />
        </div>
        <div className="row">
          <TopVideo />
        </div>
      </div>
      <div className="d-none d-xl-block">
        <div className="row justify-content-center">
          <div className="col-5">
            <LatestVideo />
          </div>
          <div className="col-5">
            <TopVideo />
          </div>
        </div>
      </div>
      <h5>More Videos:
        <a className="btn btn-primary top-link" href={'/video'}>Video List</a>
      </h5>
    </div>
  );
}

export default Video;
