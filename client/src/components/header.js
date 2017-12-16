import React from 'react';
import {NavLink, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../actions/auth_actions';
import logo_white from '../img/logo_white.png';
import PropTypes from "prop-types";

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props){
    super(props);
    this.state = {
      userDropdown: false,
      alertsDropdown:false
    }
  }
  showUserDropdown(){
    console.log(this.state.userDropdown);
    var that = this;
    if(this.state.userDropdown == false){
      this.setState({userDropdown: true});
    }else{
      this.setState({userDropdown: false});
    }
  }
  showAlertsDropdown(){
    var that = this;
    if(this.state.alertsDropdown == false){
      this.setState({alertsDropdown: true});
    }else{
      this.setState({alertsDropdown: false});
    }
  }
  logout(e){
		e.preventDefault();
		this.props.logout();
	}
  jsUcfirst(string)
  {
    if(string !== undefined){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
  render(){
    var userDropdown;
    var username = this.jsUcfirst(this.props.auth.user.username);
    if(this.state.userDropdown == true){
      console.log('trueeeee');
      userDropdown = <div className="sub-dropdown animated-fast fadeInUp">
        <ul>
          <Link to="/tenant_utitlity"><li>Management Console</li></Link>
          <Link to="/tenant_utitlity"><li>My Profile</li></Link>
          <li className="sub-divider" />
          <li onClick={this.logout.bind(this)}>Sign Out</li>
        </ul>
      </div>;
    }else{
      userDropdown = '';
    }
    var alertsDropdown;
    if(this.state.alertsDropdown == true){
      alertsDropdown = <div className="notifications-dropdown animated-fast fadeInUp">
        <div className="caret" />
        No New Notifications</div>;
    }else{
      alertsDropdown = '';
    }

    return(
      <div>
      <div className="top-nav">
  <a href="home.html"><div className="main-logo"><img src={logo_white} alt /></div></a>
  <div className="container" style={{display: 'flex', alignItems: 'center', padding: 0}}>
    <div className="main-nav-list">
      <ul>
        <Link to="/tenant_utitlity"><li>Tenant Utility</li></Link>
        <Link to="/social_connections"><li>Social Connections</li></Link>
        <Link to="/marketplace"><li>Marketplace</li></Link>
      </ul>
    </div>
    <div className="main-search-bar">
      <input id="main-search-bar" type="text" placeholder="Search.." />
      <div className="main-search-bar-dropdown">
        <ul>
          <li>
            <div className="main-search-item">
              <div className="main-search-img" />
              <div className="main-search-title">David Blaine</div>
            </div>
          </li>
          <li>
            <div className="main-search-item">
              <div className="main-search-img" style={{backgroundImage: 'url(img/137.jpg)'}} />
              <div className="main-search-title">Deena Grey</div>
            </div>
          </li>
          <li><div className="main-search-item">See More Results</div></li>
        </ul>
      </div>
    </div>
    <div className="user-nav-options">
      <ul>
        <li><i className="fa fa-bars" />
        </li>
        <li><i onClick={this.showUserDropdown.bind(this)} className="fa fa-user" />
          {userDropdown}
        </li>
      </ul>
    </div>
  </div>
</div>

      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    auth: state.auth
  };
}
export default withRouter(connect(mapStateToProps, { logout })(Header));
