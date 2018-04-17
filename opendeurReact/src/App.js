import React, { Component } from 'react';
import './fonts/globalFonts';
import './App.scss';

// Components
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;

