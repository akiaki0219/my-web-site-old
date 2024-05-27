import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Top.css'
import React from 'react';
import ProfileBody from './ProfileBody';
import ProfileList from './ProfileList';

function Profile() {
  return (
    <div>
      <ProfileBody />
      <ProfileList />
    </div>
  );
}

export default Profile;
