import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import AppHeader from '../App/AppHeader';
import LatestVideo from "./LatestVideo";
import TopVideo from './TopVideo';
import AppFooter from '../App/AppFooter';

function Top() {
  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>
      <div className="container-fluid main-content pt-3">
        <h1>My Web Site</h1>
      </div>
      <div className="container-fluid main-content pt-3">
        <h1>Latest Video</h1>
        <LatestVideo />
        <h1>Most Viewed Video</h1>
        <TopVideo />
      </div>
      <div className="navbar navbar-dark bg-dark">
        <AppFooter />
      </div>
      <script src="main.js"></script>
    </div>
  );
}

export default Top;
