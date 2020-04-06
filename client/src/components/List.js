import React from 'react';
import ListDetail from './ListDetail';
import Map from './Map';
import './List.css';

function List({ state, data, stateLng, stateLat }) {
  return (
    <div className='listContainer'>
      <Map lng={stateLng} lat={stateLat} />
      <div className='listDetailContainer'>
        <div className='listHeader'>
          <h3 className='crumbs'>NPS.gov / Find A Park / {state}</h3>
          <h1 className='stateHeader'>{state}</h1>
        </div>
        <div className='stateParkList'>
          <h2 className='tag'>Parks</h2>
        </div>
        {Object.keys(data).map((item) => (
          <ListDetail
            key={data[item].id}
            designation={data[item].designation}
            name={data[item].name}
            addresses={data[item].addresses}
            description={data[item].description}
            images={data[item].images}
            itemData={data[item]}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
