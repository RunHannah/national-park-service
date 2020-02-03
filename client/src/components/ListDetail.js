import React from 'react';

function ListDetail(props) {
  return (
    <div>
      <span>{props.fullName}</span>
      <span>{props.states}</span>
      <p>{props.url}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default ListDetail;
