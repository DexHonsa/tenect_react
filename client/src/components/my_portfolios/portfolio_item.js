import React from 'react';
import {Link} from 'react-router-dom';
import logo_color from '../../img/logo_1.png';

class PortfolioItem extends React.Component {
  render() {
    return (
      <div>
        <Link to={this.props.portfolioLink}>
          <div className="my-projects-item">
            <div className="my-projects-logo"><img src={logo_color} alt/></div>
            <div className="my-projects-title">{this.props.portfolioName}<br/>
              <span style={{
                color: '#D1DCE7',
                fontSize: '10pt'
              }}>Portfolio</span>
            </div>
            <div className="my-projects-create-date">Created by {this.props.username}</div>
          </div>
        </Link>
        </div>
    );
  }
}
export default PortfolioItem;
