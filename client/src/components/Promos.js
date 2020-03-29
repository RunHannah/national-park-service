import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Promos.css';

function Promos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/promos');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className='promosContainer'>
      {data
        .sort((a, b) => a.order - b.order)
        .map(item => (
          <div className={`promo ${item.item}`} key={item._id}>
            <a className={`${item.item}Image`} />
            <span className='promoContent'>
              <span className='subTitle'>{item.subTitle}</span>
              <span className='title'>{item.title}</span>
            </span>
          </div>
        ))}
    </div>
  );
}

export default Promos;
