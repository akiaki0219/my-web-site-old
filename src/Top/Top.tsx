import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/Top.css';
import React from 'react';
import AppHeader from '../App/AppHeader';
import Profile from './Profile';
import Video from './Video';
import AppFooter from '../App/AppFooter';

function Top() {
  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>

      <div className="container-fluid main-content pt-3">
        <div>
          <h2>My web Site</h2>
        </div>
        <div className="top-main-content">
          <Profile />
        </div>
        <div className="top-main-content">
          <Video />
        </div>
        <div  className="top-main-content">
          <h4>Blog</h4>
          <h6>Coming soon...</h6>
        </div>
      </div>

      <div className="navbar navbar-dark bg-dark">
        <AppFooter />
      </div>
      <script src="main.js"></script>
    </div>
  );
}

export default Top;
