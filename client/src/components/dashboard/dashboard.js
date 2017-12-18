import React, { Component } from 'react';
import Header from '../header';
class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="main-stage">
  <div className="container" style={{display: 'flex', alignItems: 'center', padding: 0, position: 'relative'}}>
    <div className="left-side-panel animated fadeInDown wow">
      <div className="manager-container">
        <div className="manager-img" />
        <div className="manager-name">Ashley Rhodes<br /><div className="manager-subtitle">Property Manager</div></div>
        <a href="mailTo:ashley@gmail.com"><div className="manager-email-btn"><i className="fa fa-envelope" />&nbsp; Email</div></a>
      </div>
      <div className="stockmarket-widget">
        <div className="title-1">Stock Market</div>
        {/* TradingView Widget BEGIN */}
        {/* TradingView Widget END */}
      </div>
      <div className="local-deal-container">
        <div className="title-1">Local Deals</div>
        <img src="img/local-deals.png" alt />
      </div>
    </div>
    <div className="middle-panel  animated fadeInDown wow" data-wow-delay=".3s">
      <div className="main-property-screen-container">
        <div className="overlay">
          <div className="main-property-title">1 Tech Plaza</div>
          <div className="date-details">
            <li id="todays-date">Oct 25, 2017</li>
            <li>2:14 PM</li>
            <li>73°F</li>
          </div>
        </div>
      </div>
      <div className="title-1 center">Office Talk</div>
      <div className="main-tab-container">
        <li className="active">Top Movies</li>
        <li>Top Sports</li>
        <li>Top Celebrity Gossip</li>
      </div>
      <div className="article-item">
        <div className="article-item-top">
          <div className="article-item-details">
            <div className="article-item-title">Star Wars Is Back
              <div className="article-item-date">October 19, 2017</div>
            </div>
            <div className="article-item-views">18 <i className="fa fa-users" /></div>
          </div>
        </div>
        <div className="article-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ex quae cumque quidem totam! Laboriosam dolor culpa eius architecto, aut quis. Hic, minima molestiae deserunt tenetur iure nesciunt maxime excepturi.</div>
      </div>
      <div className="article-item">
        <div className="article-item-top" style={{backgroundImage: 'url(img/park.jpg)'}}>
          <div className="article-item-details">
            <div className="article-item-title">Jobs Are in Season
              <div className="article-item-date">October 19, 2017</div>
            </div>
            <div className="article-item-views">18 <i className="fa fa-users" /></div>
          </div>
        </div>
        <div className="article-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ex quae cumque quidem totam! Laboriosam dolor culpa eius architecto, aut quis. Hic, minima molestiae deserunt tenetur iure nesciunt maxime excepturi.</div>
      </div>
      <div style={{height: 300}} />
    </div>
    <div className="right-side-panel animated fadeInDown wow" data-wow-delay=".6s">
      <div className="notifications">
        <div className="title-1" style={{marginTop: 0}}>Notifications</div>
        <div className="notification-item">
          <div className="notification-badge red">NEW</div>
          <div className="notification-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <div className="notification-dismiss">Dismiss</div>
        </div>
        <div className="notification-item">
          <div className="notification-badge red">NEW</div>
          <div className="notification-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <div className="notification-dismiss">Dismiss</div>
        </div>
        <div className="notification-item">
          <div className="notification-badge red">NEW</div>
          <div className="notification-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <div className="notification-dismiss">Dismiss</div>
        </div>
        <div className="notification-item">
          <div className="notification-badge red">NEW</div>
          <div className="notification-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <div className="notification-dismiss">Dismiss</div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }

}

export default Dashboard;
