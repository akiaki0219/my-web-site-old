import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import AppHeader from './App/AppHeader';
import AppFooter from './App/AppFooter';

function Contact() {
  return (
    <div className="App">
      <nav className="navbar header navbar-dark bg-dark fixed-top">
        <AppHeader />
      </nav>
      <div className="container-fluid main-content pt-3">
        <h1>Contact</h1>
      </div>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputtitle" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputtitle" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputbody" className="col-sm-2 col-form-label">Body</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="inputbody"></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <nav className="navbar footer navbar-dark bg-dark fixed-bottom">
        <AppFooter />
      </nav>
      <script src="main.js"></script>
    </div>
  );
}

export default Contact;
