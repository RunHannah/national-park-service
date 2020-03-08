import React, { Component } from 'react';
import menuList from './menuList';
import './NavDesktop.css';

class NavDesktop extends Component {
  state = {
    menuList: menuList
  };

  render() {
    return (
      <div className='navDesktopContainer'>
        <ul className='navDesktopList'>
          {this.state.menuList.map(obj => (
            <li className={`list ${obj.id}`} key={obj.id}>
              <a href=''>
                <span>{obj.section}</span>
              </a>
              <ul className='items'>
                {obj.items.map(sub => {
                  return (
                    <li class='item' key={sub.service}>
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

export default NavDesktop;
