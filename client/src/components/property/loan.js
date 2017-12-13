import React, { Component } from 'react';
class Loan extends React.Component {
render() {
  return (
    <div>
    <div className="side-stage">
  <div className="property-main-title">6135 NW 167th Street Miami Lakes, FL 33015</div>
  <div className="mortgage-detail-block">
    <div className="mortgage-detail-block-main-title">Totals Weighted Averages</div>
    <div className="mortgage-detail-row">
      <div className="mortgage-detail-block-item">
        <div className="mortgage-detail-block-title">Aggregate Current Loan Balance</div>
        <div className="mortgage-detail-block-value">$1,052,388</div>
      </div>
      <div className="mortgage-detail-block-item">
        <div className="mortgage-detail-block-title">Aggregate Current Payment</div>
        <div className="mortgage-detail-block-value">$6,243</div>
      </div>
      <div className="mortgage-detail-block-item">
        <div className="mortgage-detail-block-title">Weighted Average Interest Rate</div>
        <div className="mortgage-detail-block-value">5.92%</div>
      </div>
    </div>
  </div>
  <div className="lien-table">
    <div className="row" style={{margin: 0}}>
      <div className="col-sm-4" style={{padding: 0}}>
        <div className="lien-table-headers">
          <ul>
            <li className="header" style={{borderLeft: 'none'}}>Lien</li>
            <li>Allocated % of Loan</li>
            <li>Current Balance</li>
            <li>Original Balance</li>
            <li>Description</li>
            <li>Lender of Record</li>
            <li>Loan Servicer</li>
            <li>Recording Date</li>
            <li>First Payment Date</li>
            <li>Maturity Date</li>
            <li>Interest Rate</li>
            <li>Day Calc Method</li>
            <li>Amortization Term</li>
            <li>Rate Index</li>
            <li>Current Monthly Payment</li>
            <li>Special Escrow #1 Description</li>
            <li>Special Escrow #1 Balance</li>
            <li>Special Escrow #2 Description</li>
            <li>Special Escrow #2 Balance</li>
            <li>Special Escrow #3 Description</li>
            <li>Special Escrow #3 Balance</li>
            <li className="header" style={{borderLeft: 'none'}}>Legal</li>
            <li>Loan Documents</li>
            <li className="header" style={{borderLeft: 'none'}}>Third Party Reports</li>
            <li>Appraisal</li>
            <li>Environmental Report</li>
            <li>Inspection Report</li>
            <li>Zoning/Flood Report</li>
            <li>Other</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-8" style={{padding: 0}}>
        <div className="row" style={{margin: 0}}>
          <div className="col-sm-4" style={{padding: 0}}>
            <div className="lien-item">
              <ul>
                <li className="header">Lien 1</li>
                <li>100%</li>
                <li>984,888</li>
                <li>1,000,000</li>
                <li>First Mortage</li>
                <li>Lehman Brothers</li>
                <li>Midland</li>
                <li>7/8/2016</li>
                <li>8/1/2016</li>
                <li>8/1/2021</li>
                <li>6.125%</li>
                <li>Actual 360</li>
                <li>360 Months</li>
                <li>Fixed</li>
                <li>6,076</li>
                <li>Tenant Improvements</li>
                <li>25,000</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li className="header">&nbsp; </li>
                <li><a href="img/Lien 1 Loan Docs.zip">Download</a></li>
                <li className="header">&nbsp; </li>
                <li><a target="blank" href="img/Sample-Appraisal-Report-Industrial.pdf">View Report</a></li>
                <li><a target="blank" href="img/lvmh_rapport-environment_2016en.pdf">View Report</a></li>
                <li><a target="blank" href="img/Sample_Commercial_Report.pdf">View Report</a></li>
                <li><a target="blank" href="img/bc-standard-zoning-report-sample.pdf">View Report</a></li>
                <li>--</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4" style={{padding: 0}}>
            <div className="lien-item">
              <ul>
                <li className="header">Lien 2</li>
                <li>100%</li>
                <li>50,000</li>
                <li>50,000</li>
                <li>Line of Credit</li>
                <li>Wells Fargo</li>
                <li>Wells Fargo</li>
                <li>1/1/2017</li>
                <li>2/1/2017</li>
                <li>2/1/2022</li>
                <li>4.000%</li>
                <li>30/360</li>
                <li>Interest Only</li>
                <li>1 month LIBOR</li>
                <li>167</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li className="header">&nbsp; </li>
                <li><a href="img/Loan Doc - Wells Fargo Line of Credit Lien 2.pdf">Download</a></li>
                <li className="header">&nbsp; </li>
                <li><a target="blank" href="img/Sample-Appraisal-Report-Industrial.pdf">View Report</a></li>
                <li>--</li><li>--</li><li>--</li>
                <li>--</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4" style={{padding: 0}}>
            <div className="lien-item">
              <ul>
                <li className="header">Lien 3</li>
                <li>100%</li>
                <li>17,500</li>
                <li>17,500</li>
                <li>Mechanic's Lien</li>
                <li>Dex Construction</li>
                <li>Susan Jones, Esq.</li>
                <li>1/1/2017</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>0</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li>NAP</li>
                <li className="header">&nbsp; </li>
                <li><a href="img/Loan Doc- mechanic lien - Lien 3.pdf">Download</a></li>
                <li className="header">&nbsp; </li>
                <li>--</li>
                <li>--</li>
                <li>--</li>
                <li>--</li>
                <li>--</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*link buttons
				<div class="mortgage-detail-block" style="height:200px">
				<div class="mortgage-detail-block-main-title">Third Party Reports</div>
				<div class="link-btns" style="height:150px; padding:0px 50px">

					<a target="blank" href="img/Sample-Appraisal-Report-Industrial.pdf"><div class="link-btn">Appraisal</div></a>
					<a target="blank" href="img/lvmh_rapport-environment_2016en.pdf"><div class="link-btn">Environmental Report</div></a>
					<a target="blank" href="#"><div class="link-btn">Inspection Report</div></a>
					<a target="blank" href="img/bc-standard-zoning-report-sample.pdf"><div class="link-btn">Zoning/Flood</div></a>
					<a target="blank" href="img/Example Flood Risk Report.pdf"><div class="link-btn">Other</div></a>

				</div>
				</div>*/}
  <div style={{height: 300}} />
</div>

    </div>
  );
}
}
export default Loan;
