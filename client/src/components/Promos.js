import React, { useState, useEffect } from 'react';
import PromosData from '../data/promosData';
import './Promos.css';

function Promos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (PromosData) {
      setData(PromosData);
    }
  }, []);

  return (
    <div className='promosContainer'>
      <div className='promosWrapper'>
        {data
          .sort((a, b) => a.order - b.order)
          .map((item) => (
            <div className={`promo ${item.item}`} key={item.id}>
              <span className='promoContent'>
                <span className='subTitle'>{item.subTitle}</span>
                <span className='title'>{item.title}</span>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Promos;
