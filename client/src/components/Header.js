import React from 'react';

const headerStyle = {
  minHeight: '55px',
  backgroundColor: 'black',
  color: '#fff',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  padding: '10px'
};

function Header() {
  return <div style={headerStyle}>National Park Service</div>;
}

export default Header;
