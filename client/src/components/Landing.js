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
      parkData: [],
      stateValue: '',
      stateLng: 0,
      stateLat: 0,
      zoom: 0,
      abbr: '',
      isLoading: false,
      blogData: [],
      mapData: null,
    };
  }

  componentDidUpdate() {
    window.onpopstate = (e) => {
      window.location.reload(false);
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

  callParks = async (state) => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `http://localhost:5000/parks?state=${state}`
      );
      this.setState({
        parkData: response.data.data,
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

  selectState = (state) => {
    const stateObject = this.lookupStateObject(state);
    const {
      longitude: stateLng,
      latitude: stateLat,
      abbreviation: abbr,
      zoom,
    } = stateObject[0];

    this.setState({ stateValue: state, stateLng, stateLat, abbr, zoom });
    this.callParks(abbr);
    this.callMap(stateLng, stateLat);
  };

  lookupStateObject = (state) => {
    return stateList.filter((item) => item.name === state);
  };

  render() {
    const {
      blogData,
      isLoading,
      stateValue,
      parkData,
      mapData,
      stateLng,
      stateLat,
      zoom,
    } = this.state;

    if (isLoading) {
      return <Loading />;
    }
    if (!isLoading && parkData.length > 0 && mapData) {
      return (
        <Route
          path='/state/:state'
          render={(props) => (
            <List
              parkData={parkData}
              mapData={mapData}
              state={stateValue}
              stateLng={stateLng}
              stateLat={stateLat}
              mapZoom={zoom}
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
