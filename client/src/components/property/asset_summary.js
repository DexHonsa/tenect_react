import React, { Component } from 'react';
class AssetSum extends React.Component {
  render() {
    return (
      <div>
      <div className="side-stage">
<div className="property-main-title">6135 NW 167th Street Miami Lakes, FL 33015</div>
<div className="exporting-options">
  <div className="exporting-option-selector">
    <select><option selected>Summary Report</option><option>Detailed Report</option></select>
  </div>
  <div className="download-report-btn">Download PDF</div>
</div>
<div style={{textAlign: 'center', width: '100%', fontSize: '12pt', marginTop: 25, fontWeight: 500}}>Asset Summary Preview</div>
<div className="exporting-sample-container">
  <div className="exporting-sample-img"><img src="img/export_report.jpg" alt /></div>
</div>
<div style={{height: 300}} />
</div>

      </div>
    );
  }
}
export default AssetSum;
