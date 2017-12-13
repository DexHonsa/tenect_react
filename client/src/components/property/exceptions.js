import React, { Component } from 'react';
class Exceptions extends React.Component {
  render() {
    return (
      <div>
      <div className="side-stage">
  <div className="side-stage-title">Exceptions</div>
  <div className="exporting-options">
    <div className="property-selector"><select name="property" id>
        <option value>6135 NW 167th Street E-18 Miami Lakes, FL 33015</option>
        <option value>18 South Palmer Rd Miami Lakes, FL 33015</option>
        <option value>6135 NW 167th Street E-7 Miami Lakes, FL 33015</option>
      </select></div>
    <div className="download-report-btn">Download Excel</div>
  </div>
  <div className="exceptions-container">
    <div className="exception-item mild">
      <div className="exception-icon">1</div>
      <div className="exception-title">Gross Square Footage ≠ Square Footage per Public Record.<br /><div className="exceptions-severity">Mild</div></div>
    </div>
    <div className="exception-item severe">
      <div className="exception-icon">2</div>
      <div className="exception-title">FEI/EIN Number Left Blank<br /><div className="exceptions-severity">High</div></div>
    </div>
  </div>
</div>

      </div>
    );
  }
}
export default Exceptions;
