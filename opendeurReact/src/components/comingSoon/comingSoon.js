import React, { Component } from 'react';
import './comingSoon.scss';

// images
import banner from './banner.svg';

class ComingSoon extends Component {
  render() {
    return (
      <div className="backGround">
        <div className="center">
          <h1>Coming soon ...</h1>
          <img src={banner} alt="openDeurBanner" />
        </div>
      </div>
    );
  }
}

export default ComingSoon;
