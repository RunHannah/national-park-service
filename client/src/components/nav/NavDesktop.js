import React, { Component } from 'react';
import menuList from './menuList';
import './NavDesktop.css';

class NavDesktop extends Component {
  state = {
    menuList: menuList,
  };

  render() {
    return (
      <div className='navDesktopContainer'>
        <ul className='navDesktopList'>
          {this.state.menuList.map((obj) => {
            if (obj.id === 'searchForParks') {
              return (
                <li className={`list ${obj.id}`} key={obj.id}>
                  <img
                    src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/globalnav/GlobalNavPromo_GLAC_JacobWFrank_158x94.jpg'
                    alt='Plants and mountain silhouetted against Milky Way and starry night sky'
                  ></img>
                  <ul className='items'>
                    <li className='itemDesktop' key={obj.items[0].service}>
                      <span>{obj.items[0].service}</span>
                    </li>
                  </ul>
                </li>
              );
            } else {
              return (
                <li className={`list ${obj.id}`} key={obj.id}>
                  <span>{obj.name}</span>

                  <ul className='items'>
                    {obj.items.map((sub) => {
                      return (
                        <li className='itemDesktop' key={sub.service}>
                          <span>{sub.service}</span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default NavDesktop;
