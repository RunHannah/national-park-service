import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomepageHero from './HomepageHero';
import BlogContent from './blogContent';
import List from './List';
import Promos from './Promos';
import SiteSections from './SiteSections';

const landingStyle = {
  height: '100%'
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stateValue: '',
      isLoading: true,
      blogData: [],
      stateParksData: []
    };
  }

  async componentDidMount() {
    await fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.setState({ blogData: data });
      });

    await fetch('http://localhost:5000/parks')
      .then(response => response.json())
      .then(data => {
        console.log('PARK DATA', data);
        this.setState({ data: data.data, isLoading: false });
      });
  }

  // callApi = async state => {
  //   const response = await fetch(`http://localhost:5000?state=${state}`);
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   this.setState({
  //     data: body.data,
  //     loading: false
  //   });
  // };

  selectState = state => {
    this.setState({ stateValue: state });
    // this.callApi(state);
    this.filterParks(state);
  };

  filterParks = state => {
    const { data } = this.state;
    let filteredData = [];

    filteredData = data.filter(obj => obj.states === state);
    this.setState({ stateParksData: filteredData });
  };

  render() {
    const { blogData, isLoading, stateParksData } = this.state;

    if (!isLoading && stateParksData.length > 0) {
      let { stateParksData } = this.state;

      return (
        <Route
          path='/state/:state'
          render={props => <List data={stateParksData} {...props} />}
        />
      );
    }

    if (blogData) {
      return (
        <div style={landingStyle}>
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
