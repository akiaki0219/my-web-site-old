import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href="/">あっきー</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/top">Top</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/video">Video</a>
          </li>
          <li className="nav-item">
            <h6 className="nav-link">Blog (coming soon...)</h6>
          </li>
          <li className="nav-item">
            <h6 className="nav-link">Contact (coming soon...)</h6>
          </li>
          <li className="nav-item dropdown-center">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Link</a>
            <ul className="dropdown-menu mb-2 mb-sm-0 bg-dark" aria-labelledby="navbarDropdown">
              <li className="nav-item">
                <a className="nav-link" href="https://x.com/akiaki02_19">X (Twitter)</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.youtube.com/@akiaki02_19">YouTube</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.nicovideo.jp/user/130487990">niconico</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://note.com/akiaki02_19/">note</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppHeader;
