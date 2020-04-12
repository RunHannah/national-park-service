import React from 'react';
import ListDetail from './ListDetail';
import Map from './Map';
import './List.css';

function List({ state, parkData, stateLng, stateLat, mapData }) {
  return (
    <div className='listContainer'>
      <Map
        mapData={mapData}
        lng={stateLng}
        lat={stateLat}
        parkData={parkData}
      />
      <div className='listDetailContainer'>
        <div className='listHeader'>
          <h3 className='crumbs'>NPS.gov / Find A Park / {state}</h3>
          <h1 className='stateHeader'>{state}</h1>
        </div>
        <div className='stateParkList'>
          <h2 className='tag'>Parks</h2>
        </div>
        {Object.keys(parkData).map((item) => (
          <ListDetail
            key={parkData[item].id}
            designation={parkData[item].designation}
            name={parkData[item].name}
            addresses={parkData[item].addresses}
            description={parkData[item].description}
            images={parkData[item].images}
            itemData={parkData[item]}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
