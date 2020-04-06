import React, { Component } from 'react';
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      screenWidth: null,
    };
  }

  componentDidMount() {
    this.setState({ screenWidth: window.innerWidth });
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    let { menuOpen, screenWidth } = this.state;
    console.log('window.width', window.innerWidth);
    return (
      <div className='headerContainer'>
        <div className='headerWrapper'>
          <span className='headerStyle'>National Park Service</span>
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
