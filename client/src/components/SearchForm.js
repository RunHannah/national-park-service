import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stateList from '../stateList';

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
      displayMenu: false,
      stateList: stateList
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
    const { stateList } = this.state;

    const stateMenu = stateList.map(item => (
      <li key={item.fullName}>
        <Link
          to={`/state/${item.state}`}
          onClick={() => this.clickState(`${item.state}`)}
        >
          {item.fullName}
        </Link>
      </li>
    ));

    return (
      <div style={formStyle}>
        <div>
          <label>
            <a style={linkStyle} href='nps.gov'>
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
            <ul style={dropdownMenu}>{stateMenu}</ul>
          ) : null}
        </div>
        <div>
          <p>
            <a style={linkStyle} href='nps.gov'>
              See All Parks & Search By Map
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SearchForm;
