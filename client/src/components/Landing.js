import React, { Component } from 'react';
import HomepageContainer from './HomepageContainer';
import { Redirect, Route, Switch } from 'react-router-dom';
import List from './List';

const landingStyle = {
  height: '100%'
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stateValue: '',
      isLoading: true
    };
  }

  callApi = async state => {
    console.log('call Api', state);
    const response = await fetch(`http://localhost:5000?state=${state}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({
      data: body.data,
      loading: false
    });

    console.log('data', this.state.data);
  };

  selectState = state => {
    console.log('state', state);
    this.setState({ stateValue: state });

    this.callApi(state);
  };

  render() {
    const { stateValue, data } = this.state;

    if (this.state.loading === false) {
      console.log('routing?');
      return (
        <Switch>
          <Redirect to={`/state/${stateValue}`} />
          <Route path={`/state/${stateValue}`}>
            <List data={data} />
          </Route>
        </Switch>
      );
    }

    return (
      <div style={landingStyle}>
        <HomepageContainer selectState={this.selectState} />
      </div>
    );
  }
}

export default Landing;
