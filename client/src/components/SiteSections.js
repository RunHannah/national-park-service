import React from 'react';
import './SiteSections.css';

function SiteSections() {
  return (
    <div className='siteContainer'>
      <div className='siteWrapper'>
        <h2 className='siteTitle'>
          Discover America's Story: The National Parks
        </h2>
        <div className='siteButtons'>
          <button>Plan Your Visit</button>
          <button>Learn & Explore</button>
          <button>Get Involved</button>
        </div>
      </div>
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
