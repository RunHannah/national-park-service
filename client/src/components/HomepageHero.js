import React from 'react';
import SearchForm from './SearchForm';
import './HomepageHero.css';

function HomepageHero(props) {
  return (
    <div className='homepageContainer'>
      <div className='homepageWrapper'>
        <div className='contentWrapper'>
          <div className='content'>
            <span className='contentTitle'>
              COMMEMORATING WOMEN IN CIVIC ENGAGEMENT
            </span>
            <h2 className='contentSubtitle'>Women's History Month</h2>
            <a className='contentButton'>Explore History</a>
          </div>
        </div>
        <SearchForm selectState={props.selectState} />
      </div>
    </div>
  );
}

export default HomepageHero;
