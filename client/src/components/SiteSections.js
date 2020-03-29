import React from 'react';
import './SiteSections.css';

function SiteSections() {
  return (
    <div className='siteContainer'>
      <h2 className='siteTitle'>
        Discover America's Story: The National Parks
      </h2>
      <div className='siteButtons'>
        <a>Plan Your Visit</a>
        <a>Learn & Explore</a>
        <a>Get Involved</a>
      </div>
      <br />
      <div className='findYourPark'>
        <img
          src='https://www.nps.gov/images/FYP_ETP_STLI.png'
          alt="Statue of Liberty's crown with Find Your Park text superimposed"
        />
      </div>
    </div>
  );
}

export default SiteSections;
