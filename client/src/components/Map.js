import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: props.lng,
      lat: props.lat,
      zoom: 5.1,
      mapData: this.props.mapData,
      parkData: this.props.parkData,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    console.log('this.stata.mapData', this.state.mapData);
    console.log('this.stata.parkData', this.state.parkData);

    //Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // add markers to map
    this.state.parkData.forEach(function (marker) {
      if (
        marker.designation === 'National Park' ||
        marker.designation === 'National Parks' ||
        marker.designation === 'National Monument'
      ) {
        // create a DOM element for the marker
        let el = document.createElement('div');
        el.className = 'marker';
        el.innerText = marker.name;
        el.style.fontSize = '11px';
        el.style.color = '#4b5e26';
        el.style.textTransform = 'uppercase';
        el.style.fontWeight = 400;

        let coordArr = [];
        coordArr.push(marker.longitude);
        coordArr.push(marker.latitude);

        // add marker to map
        new mapboxgl.Marker(el).setLngLat(coordArr).addTo(map);
      }
    });
  }

  render() {
    return (
      <div className='map'>
        <div className='sidebarStyle'>
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{' '}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

export default Map;
