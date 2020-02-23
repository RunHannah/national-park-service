import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const formStyle = {
  height: '135px',
  width: '100%',
  fontFamily: 'inherit',
  backgroundColor: 'rgba(0,0,0,.5)',
  position: 'absolute',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'space-around'
};

const linkStyle = {
  textDecoration: 'underline',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '16px'
};

const dropdownMenu = {
  display: 'block',
  position: 'absolute',
  listStyle: 'none'
};

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };
  }

  showDropdownMenu = () => {
    this.setState({ displayMenu: true });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false });
  };

  clickState = state => {
    this.props.selectState(state);

    this.setState({
      displayMenu: !this.state.displayMenu
    });
  };

  render() {
    return (
      <div style={formStyle}>
        <div>
          <label>
            <a style={linkStyle} href=''>
              FIND A PARK
            </a>
          </label>
        </div>
        <div>
          <button
            onClick={
              !this.state.displayMenu
                ? this.showDropdownMenu
                : this.hideDropdownMenu
            }
          >
            Select A State
          </button>
          {this.state.displayMenu ? (
            <ul style={dropdownMenu}>
              <li>
                <Link to='/state/AL' onClick={() => this.clickState('AL')}>
                  AL
                </Link>
              </li>
              <li>
                <Link to='/state/ME' onClick={() => this.clickState('ME')}>
                  ME
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <p>
            <a style={linkStyle} href='#'>
              See All Parks & Search By Map
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SearchForm;
