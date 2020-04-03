import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import HomepageHero from './HomepageHero';
import BlogContent from './blogContent';
import List from './List';
import Promos from './Promos';
import SiteSections from './SiteSections';
import Loading from './Loading';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stateValue: '',
      isLoading: false,
      blogData: [],
      mapData: {},
      apiToken: ''
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
    this.setState({ isLoading: true });
    const response = await fetch(`http://localhost:5000/parks?state=${state}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    this.setState({
      data: body.data,
      isLoading: false
    });
  };

  callMap = async state => {
    const response = await fetch(`http://localhost:5000/map?location=${state}`);
    const body = await response.json();

    console.log('body', body);

    if (response.status !== 200) throw Error(body.message);
    this.setState({
      mapData: body.data
    });
  };

  selectState = state => {
    this.setState({ stateValue: state });
    this.callApi(state);
    this.callMap('alabama');
  };

  render() {
    const { blogData, isLoading, data, mapData } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (!isLoading && data.length > 0) {
      return (
        <Route
          path='/state/:state'
          render={props => <List data={data} mapData={mapData} {...props} />}
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
