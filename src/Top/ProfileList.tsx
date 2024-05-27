import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Top.css';
import React from 'react';

function ProfileList() {
  return (
    <div className="top-profile">
      <h4>history</h4>
      <table className="table top-table justify-content-center" align="center">
        <tr>
          <th>Date</th>
          <th>Event</th>
        </tr>
        <tr>
          <td>2023/9/13</td>
          <td>動画投稿開始</td>
        </tr>
      </table>
    </div>
  )
}

export default ProfileList;
