import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className='loadingContainer'>
      <span>
        <i className='fa fa-spinner fa-pulse' />
      </span>
      <p>May take up to 30-40 seconds to load results...</p>
    </div>
  );
}

export default Loading;
