import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stateList from '../stateList';
import './SearchForm.css';

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
      <div className='formStyle'>
        <div>
          <label>
            <a className='linkStyle' href='nps.gov' target='_blank'>
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
            <ul className='dropdownMenu'>{stateMenu}</ul>
          ) : null}
        </div>
        <div>
          <p>
            <a className='linkStyle' href='nps.gov'>
              See All Parks & Search By Map
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SearchForm;
