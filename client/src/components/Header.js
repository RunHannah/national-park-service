import React, { Component } from 'react';
import Nav from './nav/Nav';
import './nav/Nav.css';

class Header extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    let { menuOpen } = this.state;

    return (
      <div className='container'>
        <div className='header'>
          <a href='www.nps.gov' className='headerStyle'>
            National Park Service
          </a>
          <button className='button' onClick={this.toggleMenu}>
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>
        {menuOpen ? <Nav /> : null}
      </div>
    );
  }
}

export default Header;
