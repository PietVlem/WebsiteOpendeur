import React, { Component } from 'react';

// Components
import What from './What';
import Curriculums from './Curriculums';
import Where from './Where';
import DidYouKnow from './DidYouKnow';
import Aftermovie from './Aftermovie';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <What />
        <Curriculums />
        <Aftermovie />
        <DidYouKnow /> 
        <Where />
      </div>
    );
  }
}

export default Container;