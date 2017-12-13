import React, { Component } from 'react';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading:true
    }
  }
  componentDidMount(){
    this.setState({isLoading:false})
  }
  render() {
    var isLoading;
    if(this.state.isLoading == true){
      isLoading = <div className="Preloader">Preloader</div>;
    }else{
      isLoading = "";
    }
    return (
    <div>
    {isLoading}
    <div className="side-stage">
      <div className="property-main-title">6135 NW 167th Street Miami Lakes, FL 33015</div>
      <div className="property-top-container">
        <div className="property-img" />
        <div className="property-side-details">
          <ul>
            <li>
              <div className="property-info-item">
                <div className="property-info-title">Zoning Type</div>
                <div className="property-info-value">IU-3: Unlimited Industrial District</div>
              </div>
            </li>
            <li>
              <div className="property-info-item">
                <div className="property-info-title">Square Footage</div>
                <div className="property-info-value"><span className="tooltip" title="Per Public Record">10,750 SF</span></div>
              </div>
            </li>
            <li>
              <div className="property-info-item">
                <div className="property-info-title">Assessors Parcel #</div>
                <div className="property-info-value">40-237229</div>
              </div>
            </li>
            <li>
              <div className="property-info-item">
                <div className="property-info-title">Last Sale Date</div>
                <div className="property-info-value">07/08/2016</div>
              </div>
            </li>
            <li>
              <div className="addition-data-source"><i className="fa-info-circle fa" /> Data above is sourced from API/public records.</div>
            </li>
          </ul>
        </div>
      </div>
      {/*Property Details*/}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Property Details</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Date Purchased</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/HUD.pdf">05/01/2016</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Most Recent Appraisal Date</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/Sample-Appraisal-Report-Industrial.pdf#page=1">07/08/2016</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Cost Basis</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/HUD.pdf">$1,500,000</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Most Recent Appraisal Value</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/Sample-Appraisal-Report-Industrial.pdf#page=14">$1,895,000</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Gross Square Footage</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/Sample-Appraisal-Report-Industrial.pdf#page=11"><span className="tooltip" title="Per the Appraiser">11,000 SF</span></a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Appraisal LTV</div>
            <div className="basic-detail-block-value">55.7%</div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Net Rentable Square Footage</div>
            <div className="basic-detail-block-value"><a href="img/rent roll sample.pdf"><span className="tooltip" title="Per the Rent Roll">10,500 SF</span></a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Implied Equity</div>
            <div className="basic-detail-block-value">$909,068</div>
          </div>
        </div>
      </div>
      {/*Mortgage Details */}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Loan Details</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Aggregate Current Loan Balance</div>
            <div className="basic-detail-block-value"><a href="mortgage.html">$1,052,388</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Aggregate Current Payment</div>
            <div className="basic-detail-block-value"><a href="mortgage.html">$6,028</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Cross Collateralized</div>
            <div className="basic-detail-block-value"><a href="mortgage.html">No</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Cross Collateralization Percentage</div>
            <div className="basic-detail-block-value">NAP</div>
          </div>
        </div>
      </div>
      {/*Ownership Details*/}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Ownership Details</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Ownership</div>
            <div className="basic-detail-block-value"><a target="_blank" href="http://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=ForwardList&searchNameOrder=REALESTATE1934%20L140001073530&aggregateId=flal-l14000107353-10227a0d-0810-4347-a828-ba811df51ea1&searchTerm=real%20estate&listNameOrder=REALESTATE101WORKSHOP%20T070000002710">Real Estate 1934, LLC</a> </div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Jurisdiction </div>
            <div className="basic-detail-block-value">Florida Limited Liability Company</div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">FEI/EIN Number</div>
            <div className="basic-detail-block-value"><a target="_blank" href="http://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=ForwardList&searchNameOrder=REALESTATE1934%20L140001073530&aggregateId=flal-l14000107353-10227a0d-0810-4347-a828-ba811df51ea1&searchTerm=real%20estate&listNameOrder=REALESTATE101WORKSHOP%20T070000002710">--</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">SOS Number</div>
            <div className="basic-detail-block-value"><a target="_blank" href="http://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=ForwardList&searchNameOrder=REALESTATE1934%20L140001073530&aggregateId=flal-l14000107353-10227a0d-0810-4347-a828-ba811df51ea1&searchTerm=real%20estate&listNameOrder=REALESTATE101WORKSHOP%20T070000002710">L14000107353</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Most Recent Annual Report</div>
            <div className="basic-detail-block-value"><a target="_blank" href="http://search.sunbiz.org/Inquiry/CorporationSearch/GetDocument?aggregateId=flal-l14000107353-10227a0d-0810-4347-a828-ba811df51ea1&transactionId=l14000107353-8cb971c4-2f2a-4b5f-8481-cc81f1f71cce&formatType=PDF">02/14/2017</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Next Annual Report Due</div>
            <div className="basic-detail-block-value"><a target="_blank" href="http://dos.myflorida.com/sunbiz/manage-business/efile/annual-report/">05/01/2018</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Entity Annual Report Compliant</div>
            <div className="basic-detail-block-value">Yes</div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Registered Agent</div>
            <div className="basic-detail-block-value">John Smith, Esq.</div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Single Purpose Entity</div>
            <div className="basic-detail-block-value">Yes</div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">Independent Director</div>
            <div className="basic-detail-block-value"><a target="_blank" href="http://www.planningchautauqua.com/_pdfs/Land%20Bank/Organizational%20Materials/LandBankResExhibitB.pdf">Yes</a></div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title">My Ownership</div>
            <div className="basic-detail-block-value">100%</div>
          </div>
          <div className="basic-detail-block-detail-item">
            <div className="basic-detail-block-title"><a target="_blank" href="img/ORGCHART.pdf">Org Chart/Organizational Documents</a></div>
          </div>
        </div>
      </div>
      {/*Tax Details */}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Tax History</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">Assessors Parcel Number</div>
            <div className="basic-detail-block-value"><a target="_blank" href="https://miamidade.county-taxes.com/public/tangible/parcels/40-237229/bills/1447869">40-237229</a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">2016 - 2017</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/TaxNotice.pdf">$3,354</a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">2015 - 2016</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/TaxNotice.pdf">$3,254</a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">2014 - 2015</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/TaxNotice.pdf">$3,220</a></div>
          </div>
        </div>
      </div>
      {/*Insurance Information */}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Insurance Information</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">Insurance Provider</div>
            <div className="basic-detail-block-value"><a target="_blank" href="https://www.thehartford.com/">Hartford Insurance</a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">Annual Premium</div>
            <div className="basic-detail-block-value"><a target="_blank" href="https://www.thehartford.com/"><span className="tooltip" title="This is the 2018 expected premium">$8,000</span></a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">General Aggregate Coverage</div>
            <div className="basic-detail-block-value"><a target="_blank" href="img/cert_of_ins_sample-2.pdf">$2,000,000</a></div>
          </div>
        </div>
      </div>
      {/*Document Storage*/}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Document Storage</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">
              <a target="_blank" href="http://dropbox.com"><i className="fa fa-dropbox" /> Dropbox</a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">
              <a target="_blank" href>Box</a></div>
          </div>
          <div className="basic-detail-block-detail-item full">
            <div className="basic-detail-block-title">
              <a target="_blank" href>Sharepoint</a></div>
          </div>
        </div>
      </div>
      {/*Document Storage*/}
      <div className="basic-detail-block">
        <div className="basic-detail-main-title">Links to Outside Data Sources</div>
        <div className="basic-detail-block-detail-container">
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title ">
              <a target="_blank" href="http://www.argussoftware.com/"><img style={{height: 25}} src="img/AAEAAQAAAAAAAAmkAAAAJGZjNDZmOTA1LTFhNzAtNGEyMy05NGIyLTIxZmZlNWI2NGU5NA.png" alt /> &nbsp;
              </a></div>
          </div>
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title"><a target="_blank" href="https://www.mrisoftware.com/"><img style={{height: 25}} src="img/MRI_Software_logo.svg_-1.png" alt /> &nbsp;
              </a></div>
          </div>
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title">
              <a target="_blank" href="http://yardi.com"><img style={{height: 17}} src="img/yardi.png" alt /> &nbsp;
              </a></div>
          </div>
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title">
              &nbsp;
              <a target="_blank" href="http://salesforce.com"><img style={{height: 25}} src="img/SFDC_logo.png" alt /></a></div>
          </div>
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title">
              <a target="_blank" href="http://www.vts.com"><img style={{height: 25}} src="img/VTS.png" alt /></a></div>
          </div>
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title">
              <a target="_blank" href="http://www.appfolio.com"><img style={{height: 25}} src="img/appfolio.png" alt /></a></div>
          </div>
          <div className="basic-detail-block-detail-item ">
            <div className="basic-detail-block-title">
              <a target="_blank" href>Add +</a></div>
          </div>
        </div>
      </div>
      <div style={{height: 300}} />
    </div>
    </div>
  );
  }
}

export default Main;
