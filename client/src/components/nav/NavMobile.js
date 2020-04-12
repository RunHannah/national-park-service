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
      <ul className='serviceList'>
        {showItems.map((item) => (
          <li className='service' key={item.service}>
            <span className='serviceName'>{item.service}</span>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { isItemOpen, itemIndex } = this.state;
    return (
      <div
        className={
          'navMobileContainer ' + (this.props.menuOpen ? 'open' : 'closed')
        }
      >
        {menuList.map((item, index) => {
          return (
            <li
              className='item'
              key={index}
              onClick={this.handleOnClick.bind(this, index)}
            >
              <span className='itemName'>{item.name}</span>
              {isItemOpen && itemIndex === index ? this.showList(index) : null}
            </li>
          );
        })}
      </div>
    );
  }
}

export default NavMobile;
