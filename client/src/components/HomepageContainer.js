import React, { Component } from 'react';
import SearchForm from './SearchForm';

const homepageStyle = {
  height: '500px',
  width: '100%',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundImage:
    'url(https://www.nps.gov/common/uploads/hero_home/pwr/promo/E052A9A8-A3F4-4DE7-D6BE93167275B34D.jpg?width=2400&height=700&mode=crop&quality=90)'
};

class HomepageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectState } = this.props;

    return (
      <div style={homepageStyle}>
        <SearchForm selectState={selectState} />
      </div>
    );
  }
}

export default HomepageContainer;
