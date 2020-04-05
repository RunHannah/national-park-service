import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import HomepageHero from './HomepageHero';
import BlogContent from './blogContent';
import List from './List';
import Promos from './Promos';
import SiteSections from './SiteSections';
import Loading from './Loading';
import stateList from '../stateList';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stateValue: '',
      stateLng: 0,
      stateLat: 0,
      abbr: '',
      isLoading: false,
      blogData: [],
      mapData: null,
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

  callMap = async (lng, lat) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/map?lng=${lng}&lat=${lat}`
      );
      this.setState({
        mapData: response.data,
      });
    } catch (error) {
      throw new Error('Unable to retrieve map.');
    }
  };

  // selectState = (state) => {
  //   this.setState({ stateValue: state });
  //   this.callApi(state);
  //   this.callMap('alabama');
  // };

  selectState = (state) => {
    const stateObject = this.lookupStateObject(state);
    const stateLng = stateObject[0].longitude;
    const stateLat = stateObject[0].latitude;
    const abbr = stateObject[0].abbreviation;

    this.setState({ stateValue: state, stateLng, stateLat, abbr });
    this.callApi(abbr);
    this.callMap(stateLng, stateLat);
  };

  lookupStateObject = (state) => {
    return stateList.filter((item) => item.name === state);
  };

  render() {
    const {
      blogData,
      isLoading,
      data,
      mapData,
      stateLng,
      stateLat,
    } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (!isLoading && data.length > 0 && mapData) {
      return (
        <Route
          path='/state/:state'
          render={(props) => (
            <List
              data={data}
              mapData={mapData}
              stateLng={stateLng}
              stateLat={stateLat}
              {...props}
            />
          )}
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
