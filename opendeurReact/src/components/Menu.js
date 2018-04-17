import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class MenuEx extends React.Component {
  constructor() {
    super();
    this.state = {
      MenuOpen: false,
    }
  }
  handleMenuClick = () => {
    this.setState({ MenuOpen: false });
  }

  render() {
    return (
      <Menu right isOpen={this.state.MenuOpen} width={'380px'}>
        <div onClick={this.handleMenuClick} ><AnchorLink onClick={this.handleMenuClick} href="#head"><i className="fas fa-home"></i>Home</AnchorLink></div>
        <div onClick={this.handleMenuClick} ><AnchorLink href="#What"><i className="fas fa-question"></i>Wat</AnchorLink></div>
        <div onClick={this.handleMenuClick} ><AnchorLink href="#Curriculums"><i className="fas fa-book"></i >Afstudeerrichtingen</AnchorLink></div>
        <div onClick={this.handleMenuClick} ><AnchorLink href="#DidYouKnow"><i className="fas fa-lightbulb"></i>Wist je dat...</AnchorLink></div>
        <div onClick={this.handleMenuClick} ><AnchorLink href="#Footer"><i className="fas fa-map-marker"></i>Praktisch</AnchorLink></div>
      </Menu>
    );
  }
}

export default MenuEx;