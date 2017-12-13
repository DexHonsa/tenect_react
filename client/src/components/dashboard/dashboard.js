import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import logo_grey from '../../img/logo_grey.png';
import logo_color from '../../img/logo_color_with_line.png';
import computer from '../../img/computer.png';
import logo_white from '../../img/logo_white.png';
import systems_1 from '../../img/argus.png';
import systems_2 from '../../img/MRI_Software_logo.svg_-1.png';
import systems_3 from '../../img/SFDC_logo.png';
import systems_4 from '../../img/yardi.png';
import excel from '../../img/Excel-Logo-Home-Page.png';
import include from '../../img/include.png';

class Dashboard extends React.Component {


  render(){

    return(
      <div>
      <div className="main-stage">
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="side-nav">
          <ul>
            <li className="active">Getting Started</li>
            <NavLink to="/product/dashboard/faq"><li>FAQ</li></NavLink>
          </ul>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="side-stage">
          <div className="side-stage-title">Getting Started</div>
          <div className="main-desc">Upload your data to CommonBrain quickly and easily.  Choose a type of import below to get started.</div>
          <div className="side-stage-title small">Portfolio Name</div>
          <input className="project-name-input" type="text" />
          <div className="side-stage-title small">We Support <span style={{color: '#FF7600'}}>Any System</span> That Exports To Excel</div>
          <div className="system-icons">
            <div className="system-icon"><img src={systems_1} alt /></div>
            <div className="system-icon"><img src={systems_2} alt /></div>
            <div className="system-icon"><img src={systems_3} alt /></div>
            <div className="system-icon"><img src={systems_4} alt /></div>
          </div>
          <div style={{width: '100%', textAlign: 'center'}}>
            <img style={{width: '100%', display: 'inline-block'}} src={include} alt />
          </div>
          <div className="drag-and-drop">
            <div className="drag-and-drop-img">
              <img src={excel} alt /><br />
              Drag and Drop Excel Documents
            </div>
          </div>
          <div className="render-btn-container">
            <div className="render-btn">Render Your Data</div>
          </div>
          <div style={{height: 300}} />
        </div>
      </div>
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

export default connect(mapStateToProps)(Dashboard);
