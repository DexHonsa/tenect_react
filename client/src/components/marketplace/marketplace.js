import React, { Component } from 'react';
import Header from '../header';
class Marketplace extends Component {

  render() {
    return (
      <div>
      <Header />
      <div className="main-stage">
<div className="container" style={{display: 'flex', alignItems: 'center', padding: 0, position: 'relative'}}>
  <div className="left-side-panel">
    <div className="left-side-nav fixed">
      <ul>
        <li>Do You Know Somebody Who?
          <div className="left-sub-nav">
            <ul>
              <a href="marketplace.html"><li className="active">Products</li></a>
              <a href="marketplace-places.html"><li>Places</li></a>
              <a href="marketplace-jobs.html"><li>Jobs</li></a>
            </ul>
          </div>
        </li>
        <a href="food-delivery.html"><li>Food Or Grocery Delivery</li></a>
        <a href="bucketlist.html"><li>Bucket-list Travel Destinations</li></a>
      </ul>
    </div>
  </div>
  <div className="middle-panel-big">
    <div className="title-1 center">Do You Know Somebody Who..
      <div className="title-2">Products</div></div>
    <div className="main-tab-container" style={{padding: '0px 275px'}}>
      <li id="wants-to-buy-tab" className="active">Wants To Buy?</li>
      <li id="wants-to-sell-tab">Wants To Sell?</li>
    </div>
    <div style={{textAlign: 'center', width: '100%'}}>
      <div className="search-bar-2">
        <input type="text" placeholder="Type Your Search.." />
        <div className="search-2-btn">Search</div>
      </div>
    </div>
    <div id="wants-to-buy-container" className="listing-item-container">
      <div className="listing-item col-sm-4">
        <div className="listing-inner">
          <div className="listing-img">
            <div className="listing-tag">$100</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Guitar for sale</div>
            <div className="listing-info">Selling my Yamaha guitar.  Email me for more details.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner">
          <div className="listing-img" style={{backgroundImage: 'url(img/chair.jpg)'}}>
            <div className="listing-tag">$50</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Office Chair for Sale</div>
            <div className="listing-info">Selling my Chair.  Email me for more details.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner">
          <div className="listing-img" style={{backgroundImage: 'url(img/copier.jpg)'}}>
            <div className="listing-tag">$50</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Copier For Sale</div>
            <div className="listing-info">Selling my Copier.  Email me for more details.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner">
          <div className="listing-img" style={{backgroundImage: 'url(img/computer.jpg)'}}>
            <div className="listing-tag">$400</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Laptop For Sale</div>
            <div className="listing-info">Selling my Laptop.  Email me for more details.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner">
          <div className="listing-img" style={{backgroundImage: 'url(img/computer_2.jpg)'}}>
            <div className="listing-tag">$340</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Laptop For Sale</div>
            <div className="listing-info">Selling my Laptop.  Email me for more details.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height: 300, float: 'left', width: '100%'}} />
    </div>
    {/*			wants to sell container*/}
    <div id="wants-to-sell-container" className="listing-item-container" style={{display: 'none'}}>
      <div className="listing-item col-sm-4">
        <div className="listing-inner" style={{height: 180}}>
          <div className="listing-img" style={{height: 0}}>
            <div className="listing-tag">$100</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Bicycle</div>
            <div className="listing-info">Need to buy a bike to get to work.  Please let me know if you have an extra bike around.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner" style={{height: 180}}>
          <div className="listing-img" style={{height: 0}}>
            <div className="listing-tag">$100</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Bicycle</div>
            <div className="listing-info">Need to buy a bike to get to work.  Please let me know if you have an extra bike around.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner" style={{height: 180}}>
          <div className="listing-img" style={{height: 0}}>
            <div className="listing-tag">$100</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Bicycle</div>
            <div className="listing-info">Need to buy a bike to get to work.  Please let me know if you have an extra bike around.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner" style={{height: 180}}>
          <div className="listing-img" style={{height: 0}}>
            <div className="listing-tag">$100</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Bicycle</div>
            <div className="listing-info">Need to buy a bike to get to work.  Please let me know if you have an extra bike around.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div className="listing-item col-sm-4">
        <div className="listing-inner" style={{height: 180}}>
          <div className="listing-img" style={{height: 0}}>
            <div className="listing-tag">$100</div>
            <div className="listing-tag-tab" />
          </div>
          <div className="listing-details">
            <div className="listing-title">Bicycle</div>
            <div className="listing-info">Need to buy a bike to get to work.  Please let me know if you have an extra bike around.</div>
            <div className="listing-contact-btns">
              <div className="listing-email-btn"><i className="fa fa-envelope" />Email</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height: 300, float: 'left', width: '100%'}} />
    </div>
  </div>
</div>
</div>

      </div>
    );
  }

}

export default Marketplace;
