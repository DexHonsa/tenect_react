import React, { Component } from 'react';
import Header from '../header.js';
class SocialConnections extends Component {

  render() {
    return (
      <div>
      <Header />
      <div className="main-stage">
<div className="container" style={{display: 'flex', alignItems: 'center', padding: 0, position: 'relative'}}>
  <div className="left-side-panel ">
    <div className="left-side-nav fixed">
      <ul>
        <li className="active mini-profile"><div className="mini-profile-img" />My Profile</li>
        <a href="explore.html"><li>Explore</li></a>
        <a href="best-of.html"><li>Best Of</li></a>
        <li>Interest Groups
          <div className="left-sub-nav">
            <ul>
              <li>Running</li>
              <li>Yoga</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="middle-panel-big">
    <div className="profile-container">
      <div className="profile-banner">
        <div className="overlay" style={{height: '50%', position: 'absolute', bottom: 0}} />
        <div className="edit-profile-banner-btn">Edit Picture</div>
      </div>
      <div className="profile-img">
        <div className="profile-title">Jessica Mays</div>
      </div>
      <div className="basic-information-container">
        <div className="title-3">Basic Information</div>
        <div className="row">
          <div className="col-sm-6 info-item">
            <div className="info-item-inner">
              <div className="info-item-title">Name</div>
              <div className="info-item-value">Jessica Mays</div>
            </div>
          </div>
          <div className="col-sm-6 info-item">
            <div className="info-item-inner">
              <div className="info-item-title">Email</div>
              <div className="info-item-value">Jessica Mays</div>
            </div>
          </div>
          <div className="col-sm-6 info-item">
            <div className="info-item-inner">
              <div className="info-item-title">Education</div>
              <div className="info-item-value">Jessica Mays</div>
            </div>
          </div>
          <div className="col-sm-6 info-item">
            <div className="info-item-inner">
              <div className="info-item-title">Phone</div>
              <div className="info-item-value">Jessica Mays</div>
            </div>
          </div>
          <div className="col-sm-6 info-item">
            <div className="info-item-inner">
              <div className="info-item-title">Birthday</div>
              <div className="info-item-value">Jessica Mays</div>
            </div>
          </div>
        </div>
        <br />
        <div className="title-3">Employer</div>
        <div className="row">
          <div className="col-sm-6 info-item">
            <div className="info-badge">
              <div className="info-img" />
              <div className="info-title">Wells Fargo</div>
              <div className="info-details">15 Employees</div>
            </div>
          </div>
        </div>
        <br />
        <div className="title-3">Interest Groups</div>
        <div className="row">
          <div className="col-sm-6 info-item">
            <div className="info-badge">
              <div className="info-img" style={{backgroundImage: 'url(img/running.jpg)'}} />
              <div className="info-title">Running</div>
              <div className="info-details">15 Members</div>
            </div>
          </div>
          <div className="col-sm-6 info-item">
            <div className="info-badge">
              <div className="info-img" style={{backgroundImage: 'url(img/yoga.jpg)'}} />
              <div className="info-title">Yoga</div>
              <div className="info-details">15 Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

      </div>
    );
  }

}

export default SocialConnections;
