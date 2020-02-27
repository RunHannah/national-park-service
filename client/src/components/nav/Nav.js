import React, { Component } from 'react';
import menuList from './menuList';
import './Nav.css';

class Nav extends Component {
  state = {
    menuList: menuList
  };

  render() {
    return (
      <div className='navContainer'>
        <ul className='navList'>
          {this.state.menuList.map(obj => (
            <li className='list' key={obj.id}>
              <a href=''>
                <span>{obj.section}</span>
              </a>
              <ul className='items'>
                {obj.items.map(sub => {
                  return (
                    <li key={sub.service}>
                      <a href=''>
                        <span>{sub.service}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;
