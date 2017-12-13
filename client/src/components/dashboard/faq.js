import React from 'react';
import {Link} from 'react-router-dom';

class FAQ extends React.Component {
  render(){
    return(
      <div>
      <div className="main-stage">

<div className="container">
  <div className="row">
    <div className="col-sm-3">
      <div className="side-nav">
        <ul>
          <Link to="/product/dashboard"><li>Getting Started</li></Link>
          <li className="active">FAQ</li>
        </ul>
      </div>
    </div>
    <div className="col-sm-9">
      <div className="side-stage">
        <div className="side-stage-title">Frequently Asked Questions</div>
        <div className="settings-container">
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question"><span><i className="fa fa-question-circle" /></span>How secure is the CommonBrain software? How can we ensure our data is safe?</div>
              <div className="faq-answer">Security is a top priority for CommonBrain. We host our platform on Amazon Web Services (AWS), which is in compliance with the most security-sensitive organizations throughout the world. This powerful infrastructure uses safeguards to protect customer privacy having all of your data stored in the most secure AWS data centers.</div>
            </div>
            <div className="faq-item">
              <div className="faq-question"><span><i className="fa fa-question-circle" /></span>How does the data in CommonBrain get populated?</div>
              <div className="faq-answer">There are multiple ways your data can be populated, which can be done by you or CommonBrain staff. The simplest way is to bulk import data from a standard Excel file.  If your workflow uses Excel templates we can grab data as long as there is some level of consistency amongst files in your asset portfolio.  If you do not have consistent templates, CommonBrain can give you some “best practices” approaches.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question"><span><i className="fa fa-question-circle" /></span>How does CommonBrain integrate with outside data sources?</div>
              <div className="faq-answer">This depends on the type of data we are integrating with, so this answer varies. Typically, with outside data sources we connect through an application program interface (API or ReST API). Our development team has worked with a wide range of vendors and we acknowledge the easiest way to pull this data is through an API. However, we have ran into situations, typically with legacy software systems, where it is not possible to integrate with an API. In these instances, we use the ETL process (extract, transform, load). This is a manual process that typically includes us having to get read-only access to the system or software from where data is pulled. After that initial step, we set up CAB files to pull from the data source in the ETL process. Through the CAB files we can set up a regular frequency to pull the data. This is as close as one can get to real-time data without an API.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

      </div>
    );
  }
}
export default FAQ;
