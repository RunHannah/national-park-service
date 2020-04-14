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

    //Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

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
        el.style.fontWeight = 700;

        let coordArr = [];
        coordArr.push(marker.longitude);
        coordArr.push(marker.latitude);

        // add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(coordArr)
          .setPopup(
            new mapboxgl.Popup({ offset: 25, className: 'popupBox' }) // add popups
              .setLngLat(coordArr)
              .setHTML(
                '<h3>' +
                  marker.fullName +
                  '</h3><p>' +
                  marker.description +
                  '</p>'
              )
              .setMaxWidth('350px')
          )
          .addTo(map);
      }
    });
  }

  render() {
    return (
      <div className='map'>
        <div ref={(el) => (this.mapContainer = el)} className='mapContainer' />
      </div>
    );
  }
}

export default Map;
