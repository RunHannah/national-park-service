import React, { Component } from 'react';
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      screenWidth: null
    };
  }

  componentDidMount() {
    this.setState({ screenWidth: window.innerWidth });
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    let { menuOpen, screenWidth } = this.state;

    return (
      <div className='headerContainer'>
        <div className='headerWrapper'>
          <a href='#' className='headerStyle'>
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
