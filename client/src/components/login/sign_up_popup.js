import React, {Component} from 'react';
import logo_color from '../../img/logo_color_with_line.png';
import onClickOutside from "react-onclickoutside";




class SignUpPopup extends Component {
  constructor(props){
    super(props);
    this.state = {
      popupVisible: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount(){
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  handleClick() {

      document.addEventListener('click', this.handleOutsideClick, false);


    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }


  handleOutsideClick(e) {


    if (this.node.contains(e.target)) {
      return;
    }
    this.props.hidePopup();
    this.handleClick();
  }

  render() {
    return (
      <div>
        <div className="overlay animated fadeIn">
          <div className="popup-1  animated fadeInUpBig" ref={node => { this.node = node; }}>
            <div className="sign-up-popup">
              <div className="popup-inner">
                <div className="popup-top">Sign Up to Commonbrain
                  <i className="fa fa-times" onClick={this.props.hidePopup}/></div>
                <div className="popup-content">
                  <div className="sign-up-logo">
                    <img src={logo_color} alt/>
                  </div>
                  <div className="sign-up-input-item">
                    <div className="sign-up-input-label">Username</div>
                    <input type="text" placeholder="Username"/>
                  </div>
                  <div className="sign-up-input-item">
                    <div className="sign-up-input-label">Email</div>
                    <input type="text" placeholder="Email"/>
                  </div>
                  <div className="sign-up-input-item">
                    <div className="sign-up-input-label">Password</div>
                    <input type="text" placeholder="Password"/>
                  </div>
                  <div className="sign-up-input-item">
                    <div className="sign-up-input-label">Re-type Password</div>
                    <input type="text" placeholder="Re-type Password"/>
                  </div>
                  <div className="sign-up-btn">Sign Up</div>
                  <div className="sign-up-disclaimer">Subject to Terms and Conditions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default SignUpPopup;
