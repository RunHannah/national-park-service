import React, { Component } from 'react';
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import './nav/Nav.css';

class Header extends Component {
  state = {
    menuOpen: false,
    screenWidth: window.innerWidth
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    let { menuOpen, screenWidth } = this.state;

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
        {menuOpen && screenWidth < 1024 ? (
          <NavMobile />
        ) : menuOpen && screenWidth >= 1024 ? (
          <NavDesktop />
        ) : null}
      </div>
    );
  }
}

export default Header;
