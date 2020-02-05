import React, { Component } from 'react';

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

const selectDivStyle = {
  maxWidth: '803px',
  width: '100%'
};

const selectStyle = {
  width: '100%',
  height: '25px',
  marginTop: '15px'
};

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
      <div style={formStyle}>
        <div>
          <label>
            <a style={linkStyle} href=''>
              FIND A PARK
            </a>
          </label>
        </div>
        <div style={selectDivStyle}>
          <select
            style={selectStyle}
            value={this.state.value}
            onChange={this.handleChange}
          >
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
