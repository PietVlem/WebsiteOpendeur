import React, { Component } from 'react';
import ReactFontFace from 'react-font-face'

//import style
import NeoSansProBold from '../../fonts/NeoSansPro-Bold.otf';
import NeoSansProMed from '../../fonts/NeoSansPro-Medium.otf';
import './comingSoon.scss';

// images
import banner from './banner.png';

const fonts = {
  main: {
    fontFamily: 'NeoSansPro Bold',
  }
}

class ComingSoon extends Component {
  render() {
    return (
      <div className="backGround">
        <div className="center">
          <h1 style={fonts.main}>Coming soon ...</h1>
          <img src={banner} alt="openDeurBanner" />
        </div>
      </div>
    );
  }
}

let fontConfig = {
  google: [
  ],
  file: [
    {
      fontFamily: 'NeoSansPro Bold',
      fontStyle:  'bold',
      fontWeight: 700,
      file: NeoSansProBold,
      fontType: 'opentype',
      fileLocal: 'NeoSansPro-Bold'
    },
  ],
}

export default ReactFontFace(ComingSoon, fontConfig);
