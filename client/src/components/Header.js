import React, { Component } from 'react';
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    let buttonClose = (
      <span>
        <FontAwesomeIcon icon={faTimes} />
        close
      </span>
    );
    let buttonOpen = (
      <span>
        <FontAwesomeIcon icon={faBars} />
        menu
      </span>
    );

    return (
      <div className='headerContainer'>
        <div className='headerWrapper'>
          <div className='miniWrapper'>
            <img
              className='headerLogo'
              src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png'
              alt='NPS logo'
            ></img>
            <span className='headerStyle'>National Park Service</span>
          </div>
          <button
            className={'headerButton ' + (menuOpen ? 'active' : '')}
            onClick={this.toggleMenu}
          >
            {menuOpen ? buttonClose : buttonOpen}
          </button>
        </div>
        {menuOpen && screenWidth < 1024 ? (
          <NavMobile menuOpen />
        ) : menuOpen && screenWidth >= 1024 ? (
          <NavDesktop menuOpen />
        ) : null}
      </div>
    );
  }
}

export default Header;
