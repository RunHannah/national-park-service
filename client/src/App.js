import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/data');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log('body', body.data);
    return body;
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>List of National Parks</h1>
        <List data={data} />
      </div>
    );
  }
}

export default App;
