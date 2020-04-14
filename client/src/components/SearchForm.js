import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stateList from '../stateList';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      stateList: stateList,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.toggleClosed);
  }

  showDropdownMenu = () => {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.toggleClosed);
    });
  };

  toggleClosed = () => {
    this.setState({ displayMenu: false });
    document.removeEventListener('click', this.toggleClosed);
  };

  clickState = (state) => {
    this.props.selectState(state);
  };

  render() {
    const { stateList, displayMenu } = this.state;
    const stateListSorted = stateList.sort((a, b) => a.name > b.name);

    const stateMenu = stateListSorted.map((item) => (
      <li className='stateItem' key={item.name}>
        <Link
          className='stateLink'
          to={`/state/${item.abbreviation}`}
          onClick={() => this.clickState(`${item.name}`)}
        >
          {item.name}
        </Link>
      </li>
    ));

    return (
      <div className='formContainer'>
        <div className='findButton'>
          <label>
            <span className='linkStyle'>FIND A PARK</span>
          </label>
        </div>
        <div className='searchBar'>
          <button className='searchButton' onClick={this.showDropdownMenu}>
            By State...
          </button>
          {displayMenu ? <ul className='dropdownMenu'>{stateMenu}</ul> : null}
        </div>
        <div>
          <p>
            <span className='linkStyle advancedSearch'>
              See All Parks & Search By Map
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default SearchForm;
