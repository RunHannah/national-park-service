import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/data');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
