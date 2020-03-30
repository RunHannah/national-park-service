import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerWrapper'>
        <div className='footerTitle'>
          <h1>Experience Your America</h1>
        </div>
        <hr />
        <div className='govLinks'>
          <div className='parkLinks'>
            <div className='agency'>
              <a className='npsTitle' href='#'>
                National Park Service
              </a>
              <a className='doiTitle' href='#'>
                U.S. Department of the Interior
              </a>
            </div>
            <img
              className='footerLogo'
              src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png'
            ></img>
          </div>
          <div className='policyLinks'>
            <div className='linksOne'>
              <a href='#'>Accessibility</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>FOIA</a>
              <a href='#'>Notices</a>
              <a href='#'>Disclaimer</a>
            </div>
            <div className='linksTwo'>
              <a href='#'>faq</a>
              <a href='#'>No Fear Act</a>
              <a href='#'>Contact Us</a>
              <a href='#'>usa.gov</a>
            </div>
          </div>
        </div>
        <div className='socialMediaLinks'>
          <a href='#'>facebook</a>
          <a href='#'>youtube</a>
          <a href='#'>twitter</a>
          <a href='#'>instagram</a>
          <a href='#'>flickr</a>
          <a href='#'>itunes</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
