import React from 'react';
import ListDetail from './ListDetail';
import './List.css';

function List({ data }) {
  console.log('List Component');

  return (
    <div className='listContainer'>
      {Object.keys(data).map(item => (
        <ListDetail
          key={data[item].id}
          fullName={data[item].fullName}
          states={data[item].states}
          url={data[item].url}
          description={data[item].description}
        />
      ))}
      )
    </div>
  );
}

export default List;
