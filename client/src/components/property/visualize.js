import React, { Component } from 'react';
class Visualize extends React.Component {
  render() {
    return (
      <div>
      <div className="side-stage">
<div className="side-stage-title">Visualize <span style={{color: '#3080e8'}}><a href="project.html">My First Portfolio</a></span></div>
{/*Property Selector*/}
<div className="property-selector-container">
  <div className="property-selector-title">Select Properties</div>
  <div className="properties">
    <div className="property-item active">
      <div className="property-item-inner">
        <div className="property-item-img" />
        <div className="property-item-title">6135 NW 167th Street E-8 Miami Lakes, FL 33015</div>
      </div>
    </div>
    <div className="property-item active">
      <div className="property-item-inner">
        <div className="property-item-img" style={{backgroundImage: 'url(img/building_2.jpg)'}} />
        <div className="property-item-title">18 South Palmer Rd Miami Lakes, FL 33015</div>
      </div>
    </div>
    <div className="property-item active">
      <div className="property-item-inner">
        <div className="property-item-img" />
        <div className="property-item-title">6135 NW 167th Street E-7 Miami Lakes, FL 33015</div>
      </div>
    </div>
  </div>
</div>
{/*Named ranges*/}
<div className="named-ranges-container">
  <div className="named-ranges-title">Select Key Fields <span className="tooltip" title="Key Fields are determined by consistent named ranges present in the property Excel files."><i style={{color: '#3080e8', fontSize: '12pt', cursor: 'pointer'}} className="fa fa-info-circle" /></span></div>
  <div className="named-ranges-tabs-container">
    <div className="named-ranges-tab"><i className="fa fa-check" />  &nbsp;Revenue</div>
    <div className="named-ranges-tab"><i className="fa fa-check" />  &nbsp;Expenses</div>
    <div className="named-ranges-tab"><i className="fa fa-check" />  &nbsp;<i>f(x)</i> NOI</div>
    <div className="named-ranges-tab inactive">Flood Zone</div>
  </div>
</div>
{/*Revenue Graph*/}
<div className="graph-section">
  <div className="file-section-title" style={{marginBottom: 10}}>Revenue</div>
  <div className="graph-selector"><select><option value>Pie Chart</option></select></div>
  <div className="graph-total">
    <div><span style={{color: '#3080e8'}}>$130,000</span> / $300,000  = 43.3% of Total</div>
  </div>
  <div className="graph-container">
    <canvas id="myChart" width={100} height={40} />
  </div>
</div>
{/*Expenses Graphs*/}
<div className="graph-section">
  <div className="file-section-title" style={{marginBottom: 10}}>Expenses</div>
  <div className="graph-selector"><select><option value>Pie Chart</option></select></div>
  <div className="graph-total">
    <div><span style={{color: '#3080e8'}}>$50,000</span> / $160,000  = 31.3% of Total</div>
  </div>
  <div className="graph-container">
    <canvas id="myChart2" width={100} height={40} />
  </div>
</div>
{/*NOI Graphs*/}
<div className="graph-section">
  <div className="file-section-title" style={{marginBottom: 10}}>NOI</div>
  <div className="graph-selector"><select><option value>Pie Chart</option></select></div>
  {/*<div class="row">
                <div class="col-sm-6">
                  <div class="graph-rank-item">
                    <div class="graph-rank-img"></div>
                    <div class="graph-rank-desc">
                      <div class="graph-rank-title">Highest NOI</div>
                      <div class="graph-rank-address">6135 NW 167th Street E-8 Miami Lakes, FL 33015</div>
                    </div>
                    <div class="graph-rank-value">$600,000</div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="graph-rank-item">
                    <div class="graph-rank-img"></div>
                    <div class="graph-rank-desc">
                      <div class="graph-rank-title">Lowest NOI</div>
                      <div class="graph-rank-address">6135 NW 167th Street E-8 Miami Lakes, FL 33015</div>
                    </div>
                    <div class="graph-rank-value">$600,000</div>
                  </div>
                </div>
              </div>*/}
  <div className="graph-total">
    <div><span style={{color: '#3080e8'}}>$80,000</span> / $140,000  = 57.1% of Total</div>
  </div>
  <div className="graph-container">
    <canvas id="myChart3" width={100} height={40} />
  </div>
</div>
<div style={{height: 300}} />
</div>

      </div>
    );
  }
}
export default Visualize;
