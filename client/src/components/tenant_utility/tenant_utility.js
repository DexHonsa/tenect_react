import React, { Component } from 'react';
import Header from '../header';
class TenantUtility extends Component {

  render() {
    return (
      <div>
      <Header />
      <div className="main-stage">
<div className="container" style={{display: 'flex', alignItems: 'center', padding: 0, position: 'relative'}}>
  <div className="left-side-panel">
    <div className="left-side-nav fixed">
      <ul>
        <a href="tenant-utility.html"><li className="active">Event Calendar</li></a>
        <a href="rent-payment.html"><li>Rent Payment</li></a>
        <a href="maintenance.html"><li>Service and Maintenance Requests</li></a>
        <a href="emergency.html"><li>Emergency Response</li></a>
        <a href="coi.html"><li>Certificate of Insurance</li></a>
        <a href="reservations.html"><li>Reservations</li></a>
        <a href="surveys.html"><li>Surveys</li></a>
      </ul>
    </div>
  </div>
  <div className="middle-panel-big">
    <div className="tenant-utility-container">
      <div className="title-1 center">Upcoming Events</div><br />
      <div className="main-tab-container" style={{padding: '0px 100px'}}>
        <li className="active">All</li>
        <li>Food</li>
        <li>Classes</li>
        <li>Work Related</li>
        <li>Fun</li>
      </div>
      <div className="event-calendar-month">
        <div className="title-2 center">November</div>
        <div className="divider" style={{marginTop: 10}} />
        <div className="event-calendar-row">
          <div className="event-calendar-item col-sm-8">
            <div className="event-calendar-item-inner">
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Playing At Work Can Make You More Productive<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
          <div className="event-calendar-item col-sm-4">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/tacos.jpg)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Food Truck<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-calendar-row">
          <div className="event-calendar-item col-sm-7">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/local-deals.png)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Local Deals<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
          <div className="event-calendar-item col-sm-5">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/yoga.jpg)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Yoga Classes<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-calendar-month">
        <div className="title-2 center">December</div>
        <div className="divider" style={{marginTop: 10}} />
        <div className="event-calendar-row">
          <div className="event-calendar-item col-sm-8">
            <div className="event-calendar-item-inner">
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Playing At Work Can Make You More Productive<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
          <div className="event-calendar-item col-sm-4">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/tacos.jpg)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Food Truck<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-calendar-row">
          <div className="event-calendar-item col-sm-7">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/local-deals.png)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Local Deals<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
          <div className="event-calendar-item col-sm-5">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/yoga.jpg)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Yoga Classes<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-calendar-month">
        <div className="title-2 center">January</div>
        <div className="divider" style={{marginTop: 10}} />
        <div className="event-calendar-row">
          <div className="event-calendar-item col-sm-8">
            <div className="event-calendar-item-inner">
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Playing At Work Can Make You More Productive<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
          <div className="event-calendar-item col-sm-4">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/tacos.jpg)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Food Truck<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-calendar-row">
          <div className="event-calendar-item col-sm-7">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/local-deals.png)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Local Deals<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
            </div>
          </div>
          <div className="event-calendar-item col-sm-5">
            <div className="event-calendar-item-inner" style={{backgroundImage: 'url(img/yoga.jpg)'}}>
              <div className="event-calendar-item-details">
                <div className="event-calendar-item-title">Yoga Classes<br /><span>Nov 01, 2017</span></div>
                <div className="event-calendar-item-info">23 <i className="fa fa-users" /></div>
              </div>
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

export default TenantUtility;
