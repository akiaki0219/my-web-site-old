import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SiteHeader = () => {
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href="#">My Web Site</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mb-2 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Top</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Video</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SiteHeader;
