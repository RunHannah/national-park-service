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
              <span className='npsTitle'>National Park Service</span>
              <span className='doiTitle'>U.S. Department of the Interior</span>
            </div>
            <img
              className='footerLogo'
              src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png'
              alt='NPS logo'
            ></img>
          </div>
          <div className='policyLinks'>
            <div className='linksOne'>
              <span>Accessibility</span>
              <span>Privacy Policy</span>
              <span>FOIA</span>
              <span>Notices</span>
              <span>Disclaimer</span>
            </div>
            <div className='linksTwo'>
              <span>faq</span>
              <span>No Fear Act</span>
              <span>Contact Us</span>
              <span>usa.gov</span>
            </div>
          </div>
        </div>
        <div className='socialMediaLinks'>
          <span>facebook</span>
          <span>youtube</span>
          <span>twitter</span>
          <span>instagram</span>
          <span>flickr</span>
          <span>itunes</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
