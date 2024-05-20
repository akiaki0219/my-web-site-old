import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteHeader from './SiteHeader'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <SiteHeader />
      </nav>
      <div className="container-fluid main-content pt-3">
        <h1>My Web Site</h1>
      </div>
      <script src="main.js"></script>
    </div>
  );
}

export default App;
