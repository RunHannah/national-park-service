import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>List of National Parks</h1>
        <SearchForm />
      </div>
    );
  }
}

export default App;
