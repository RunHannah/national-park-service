import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div classsName='footerContainer'>
      <div className='footerWrapper'>
        <div className='footerTitle'>
          <h1>Experience Your America</h1>
        </div>
        <hr />
        <div className='govLinks'>
          <div className='parkLinks'>
            <div className='agency'>
              <a className='npsTitle'>National Park Service</a>
              <a className='doiTitle'>U.S. Department of the Interior</a>
            </div>
            <img
              className='footerLogo'
              src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png'
            ></img>
          </div>
          <div className='policyLinks'>
            <div className='linksOne'>
              <a>Accessibility</a>
              <a>Privacy Policy</a>
              <a>FOIA</a>
              <a>Notices</a>
              <a>Disclaimer</a>
            </div>
            <div className='linksTwo'>
              <a>faq</a>
              <a>No Fear Act</a>
              <a>Contact Us</a>
              <a>usa.gov</a>
            </div>
          </div>
        </div>
        <div className='socialMediaLinks'>
          <a>facebook</a>
          <a>youtube</a>
          <a>twitter</a>
          <a>instagram</a>
          <a>flickr</a>
          <a>itunes</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
