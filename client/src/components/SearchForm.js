import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './List';

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
      // stateValue: '',
      data: [],
      loading: true
    };
  }

  callApi = async state => {
    const response = await fetch(`http://localhost:5000?state=${state}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({ data: body.data, loading: false, displayMenu: false });
    this.routeToList(this.state.data, state);
  };

  showDropdownMenu = () => {
    this.setState({ displayMenu: true });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false });
  };

  selectState = state => {
    this.callApi(state);
  };

  routeToList = (stateData, state) => {
    console.log('stateData', stateData);
    // return (
    //   <div>
    //     {!this.state.loading ? (
    //       <Route
    //         path={`/state/${state}`}
    //         render={() => <List data={stateData} />}
    //       />
    //     ) : null}
    //   </div>
    // );
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
                <a href='#' onClick={this.selectState.bind(this, 'AL')}>
                  AL
                </a>
              </li>
              <li>
                <a href='#' onClick={this.selectState.bind(this, 'ME')}>
                  ME
                </a>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <p>
            <a style={linkStyle} href=''>
              See All Parks & Search By Map
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SearchForm;
