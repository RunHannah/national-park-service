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
          src='/images/findYourPark.png'
          srcSet='/images/findYourParkSm.png 450w, /images/findYourParkLg.png 1024w'
          alt="Statue of Liberty's crown with Find Your Park text superimposed"
        />
      </div>
    </div>
  );
}

export default SiteSections;
