import React, { Component } from 'react';
import menuList from './menuList';
import './NavMobile.css';

class NavMobile extends Component {
  state = {
    menuList: menuList,
    isItemOpen: false,
    itemIndex: null,
  };

  handleOnClick = (index) => {
    let { isItemOpen } = this.state;
    this.setState({ isItemOpen: !isItemOpen, itemIndex: index });
  };

  showList = (index) => {
    const { menuList } = this.state;
    let showItems = menuList[index].items;

    return (
      <ul>
        {showItems.map((item) => (
          <li key={item.service}>
            <span>{item.service}</span>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { isItemOpen, itemIndex } = this.state;

    return (
      <div className='navMobileContainer'>
        {menuList.map((item, index) => {
          return (
            <li key={index} onClick={this.handleOnClick.bind(this, index)}>
              <span>{item.name}</span>
              {isItemOpen && itemIndex === index ? this.showList(index) : null}
            </li>
          );
        })}
      </div>
    );
  }
}

export default NavMobile;
