import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React from 'react';
import ProfileBody from './ProfileBody';
import ProfileList from './ProfileList';

function Profile() {
  return (
    <div>
      <h4>Profile</h4>
      <ProfileBody />
      <ProfileList />
      <h5>Contact me:
        <a className="btn btn-light link" href={'/contact'}>Contact Formn</a>
      </h5>
    </div>
  );
}

export default Profile;
