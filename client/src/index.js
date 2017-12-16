import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route } from 'react-router';
//import { browserHistory, IndexRoute } from 'react-router';
import {Router, Link, Route } from 'react-router-dom';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from './rootreducer';
import PropTypes from 'prop-types';
import setAuthoizationToken from './utils/set_authorization_token';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/auth_actions';
import App from './App.js';

import {withRouter} from 'react-router';
import history from './actions/history';

import Header from './components/header.js';
import Login from './components/login/login.js';
import Dashboard from './components/dashboard/dashboard.js';


import './css/bootstrap.min.css';
import './css/animate.css';

import './css/font-awesome.min.css';
import './css/style2.css';
import './css/tenect.css';


const store = createStore(
        RootReducer,
        compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

if(localStorage.jwtToken){
  setAuthoizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}


const Root = ({ store }) => (
  <Provider  store={store}>
    <Router history={history} >
      <div>
      <Route exact path="/" component={Login}></Route>

      <Route exact path="/dashboard" component={Dashboard}></Route>


        </div>
    </Router>
  </Provider>
)

Root.propTypes = {
store: PropTypes.object.isRequired
}


ReactDOM.render(
<Root store={store}/>

  , document.querySelector('#root'));
