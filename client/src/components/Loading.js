import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className='loadingContainer'>
      <span>
        <i className='fa fa-spinner fa-pulse' />
      </span>
    </div>
  );
}

export default Loading;
