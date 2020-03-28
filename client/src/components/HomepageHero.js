import React from 'react';
import SearchForm from './SearchForm';
import './HomepageHero.css';

function HomepageHero(props) {
  return (
    <div className='homepageStyle'>
      <SearchForm selectState={props.selectState} />
    </div>
  );
}

export default HomepageHero;
