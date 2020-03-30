import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomepageHero from './HomepageHero';
import BlogContent from './blogContent';
import List from './List';
import Promos from './Promos';
import SiteSections from './SiteSections';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stateValue: '',
      isLoading: true,
      blogData: []
    };
  }

  async componentDidMount() {
    await fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.setState({ blogData: data });
      });
  }

  callApi = async state => {
    const response = await fetch(`http://localhost:5000/parks?state=${state}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    this.setState({
      data: body.data,
      isLoading: false
    });
  };

  selectState = state => {
    this.setState({ stateValue: state });
    this.callApi(state);
  };

  render() {
    const { blogData, isLoading, data } = this.state;

    if (!isLoading && data.length > 0) {
      return (
        <Route
          path='/state/:state'
          render={props => <List data={data} {...props} />}
        />
      );
    }

    if (blogData) {
      return (
        <div className='landingContainer'>
          <HomepageHero selectState={this.selectState} />
          <BlogContent blogData={blogData} />
          <SiteSections />
          <Promos />
        </div>
      );
    }
  }
}

export default Landing;
