import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    };
  }

  callApi = async () => {
    const { value } = this.state;
    const response = await fetch(`http://localhost:5000?state=${value}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({ data: body.data });
    console.log('this.state.data', this.state.data);
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    this.callApi();
  };

  render() {
    return (
      <div>
        <label>
          By State...
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='AL' onClick={this.handleOnClick}>
              Alabama
            </option>
            <option value='AK' onClick={this.handleOnClick}>
              Alaska
            </option>
            <option value='AS' onClick={this.handleOnClick}>
              American Samoa
            </option>
            <option value='AZ' onClick={this.handleOnClick}>
              Arizona
            </option>
            <option value='AR' onClick={this.handleOnClick}>
              Arkansas
            </option>
            <option value='CA' onClick={this.handleOnClick}>
              California
            </option>
            <option value='CO' onClick={this.handleOnClick}>
              Colorado
            </option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchForm;
