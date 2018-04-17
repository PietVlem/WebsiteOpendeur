import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import mapStyles from '../data/MapsStyle.json';
import pin from '../images/pin.svg';

const AnyReactComponent = () => (
  <img src={pin}
    style={{
      position: 'relative',
      height: 80, width: 120, top: -80, left: -60,
    }}
    alt="map pin"
    >
  </img>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.087357,
      lng: 3.668688
    },
    zoom: 16,
  };
  render() {
    const mapOptions = {
      styles: mapStyles
    };
    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCRx2xw6J2xVWeb_HtceBuWNxdxm4TIYtI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={mapOptions}
        >
          <AnyReactComponent
            lat={51.087057}
            lng={3.669688}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;