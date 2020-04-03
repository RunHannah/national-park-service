import React from 'react';
import ListDetail from './ListDetail';
import Map from './Map';
import './List.css';

function List({ data }) {
  return (
    <div className='listContainer'>
      <Map />
      <div>
        {Object.keys(data).map(item => (
          <ListDetail
            key={data[item].id}
            fullName={data[item].fullName}
            states={data[item].states}
            url={data[item].url}
            description={data[item].description}
          />
        ))}
      </div>
      )
    </div>
  );
}

export default List;
