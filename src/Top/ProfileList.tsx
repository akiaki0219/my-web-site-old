import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React from 'react';

function ProfileList() {
  return (
    <div>
      <h5>history</h5>
      <ul>
        <li className="row">
          <p className="col-6">2023/9/13</p>
          <p className="col-6">投稿開始</p>
        </li>
      </ul>
    </div>
  )
}

export default ProfileList;
