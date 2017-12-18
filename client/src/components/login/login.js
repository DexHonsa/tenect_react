import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import axios from 'axios';
import validateInput from '../validations/signin_validation';
import {createBrowserHistory } from 'history';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { userLogin } from '../../actions/auth_actions';
import SignUpPopup from './signup-popup.js';


import logo_white from '../../img/logo_white.png';
import logo_color from '../../img/logo_1.png';
import TextFieldGroup from './text-input-group';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : '',
        errors : {},
        isLoading : '',
        signupPopup:false
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
  isValid(){
    const { errors, isValid } = validateInput(this.state);
    if(!isValid){
      this.setState({
        errors : errors
      })
    }
    return isValid;
  }
  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit(e){
    if(this.isValid()){
      var data = this.state;
      var that = this;

      e.preventDefault();
       this.setState({errors: {}, isLoading: true});
      this.props.userLogin(data).then(
        (res) => this.context.router.history.push('/dashboard'),
        (err) => this.setState({errors: err.data.errors, isLoading: false})
        );
    }
  }
  showSignupPopup(){
    this.setState({
      signupPopup: !this.state.signupPopup
    })
  }
  render() {
    const {username, password, errors, isLoading} = this.state;
    var signupPopup;
    if(this.state.signupPopup){
      signupPopup = <SignUpPopup hidePopup={this.showSignupPopup.bind(this)}/>
    }else{
      signupPopup = null;
    }
    return (
      <div>
      {signupPopup}
      <div>
  <div className="login-top-bar">
    <div className="top-logo">
      <img src={logo_white} alt />
    </div>
    <div className="sign-up-btn2" onClick={this.showSignupPopup.bind(this)}>Sign Up</div>
  </div>
  <div className="login-main">
    <div className="login-box">
    <form onSubmit={this.onSubmit.bind(this)} >
      <div className="login-box-logo">
        <img src={logo_color} alt />
      </div>
      <div className="login-box-input-item">
        <label htmlFor>Username</label>
        <TextFieldGroup
          field="username"
          label="username"
          type="text"
          value={username}
          error={errors.username}
          onChange={this.onChange}
        />
      </div>
      <div className="login-box-input-item">
        <label htmlFor>Password</label>
        <TextFieldGroup
        field="password"
        label="password"
        type="password"
        value={password}
        error={errors.password}
        onChange={this.onChange}
      />
      </div>
      {errors.form && <div className="alert-danger animated fadeIn">{errors.form}</div>}
      <button className="login-box-btn" type="submit">Login</button>
      <div className="disclaimer-text">Don't have an Account? <a onClick={this.showSignupPopup.bind(this)} href="#">Sign Up Here</a></div>
      </form>
    </div>
  </div>
  <footer style={{marginTop: 100}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h4> For any other inquiries, please contact us at:
          </h4>
          <p>
          </p>
          <ul className="list-unstyled">
            <li><i className="fa fa-envelope-o fa-fw" /> <a href="mailto:name@example.com">Inquire@Tenect.com</a>
            </li>
          </ul>
          <br />

          <p className="text-muted">Copyright © Tenect 2017</p>
        </div>
      </div>
    </div>
  </footer>
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

export default connect(mapStateToProps, {userLogin})(Login);
