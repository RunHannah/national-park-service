import React from 'react';
import ListDetail from './ListDetail';

function List({ data }) {
  return (
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
      )
    </div>
  );
}

export default List;
