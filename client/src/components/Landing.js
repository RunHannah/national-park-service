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
      apiToken: '',
    };
  }

  componentDidMount() {
    this.callBlogData();
  }

  callBlogData = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      this.setState({ blogData: response.data });
    } catch (error) {
      throw new Error('Unable to retrieve blog data.');
    }
  };

  callApi = async (state) => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `http://localhost:5000/parks?state=${state}`
      );
      this.setState({
        data: response.data.data,
        isLoading: false,
      });
    } catch (error) {
      throw new Error(`Unable to retrieve ${state} parks list.`);
    }
  };

  callMap = async (state) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/map?location=${state}`
      );
      this.setState({
        mapData: response.data,
      });
    } catch (error) {
      throw new Error('Unable to retrieve map.');
    }
  };

  selectState = (state) => {
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
          render={(props) => <List data={data} mapData={mapData} {...props} />}
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
