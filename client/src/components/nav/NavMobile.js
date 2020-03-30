import React, { Component } from 'react';
import menuList from './menuList';
import './NavMobile.css';

class NavMobile extends Component {
  state = {
    menuList: menuList,
    isListOpen: false,
    menuIndex: null
  };

  handleOnClick = index => {
    let { isListOpen, menuIndex } = this.state;
    this.setState({ isListOpen: !isListOpen, menuIndex: index });
  };

  showList = () => {
    const { menuList, menuIndex } = this.state;
    let showListItems = menuList[menuIndex].items;

    return (
      <ul>
        {showListItems.map(item => (
          <li key={item.service}>
            <a href='#'>
              <span>{item.service}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { isListOpen, menuIndex } = this.state;

    return (
      <div className='navMobileContainer'>
        <ul className='navList'>
          <li onClick={this.handleOnClick.bind(this, 0)}>
            <a href='#'>
              <span>Text</span>
            </a>
            {isListOpen && menuIndex === 0 ? this.showList() : null}
          </li>
          <li onClick={this.handleOnClick.bind(this, 1)}>
            <a href='#'>
              <span>Text</span>
            </a>
            {isListOpen && menuIndex === 1 ? this.showList() : null}
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMobile;
