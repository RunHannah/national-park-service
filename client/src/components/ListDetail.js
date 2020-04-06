import React from 'react';
import './ListDetail.css';

function ListDetail(props) {
  let address =
    props.addresses[0] && props.addresses[0].city ? (
      <span>
        {props.addresses[0].city}, {props.addresses[0].stateCode}
      </span>
    ) : (
      <span>{props.itemData.states}</span>
    );

  let image =
    props.images.length > 0 ? (
      <img
        className='img'
        src={props.images[0].url}
        alt={props.images[0].altText}
      />
    ) : (
      ''
    );

  return (
    <div className='listDetail'>
      <div className='parkInfo'>
        <h2 className='designation'>{props.designation}</h2>
        <h3 className='name'>{props.name}</h3>
        <h4 className='location'>{address}</h4>
        <p className='description'>{props.description}</p>
      </div>
      {image}
    </div>
  );
}

export default ListDetail;
