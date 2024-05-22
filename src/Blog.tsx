import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import AppHeader from './App/AppHeader';
import AppFooter from './App/AppFooter';

function Blog() {
  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>
      <div className="container-fluid main-content pt-3">
        <h1>Blog</h1>
      </div>
      <nav className="navbar footer navbar-dark bg-dark fixed-bottom">
        <AppFooter />
      </nav>
      <script src="main.js"></script>
    </div>
  );
}

export default Blog;
