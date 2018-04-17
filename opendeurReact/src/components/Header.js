import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


// Components
import MenuEx from './Menu';

// Assets
import logo from "../images/logo.svg";
import arrow from '../images/arrow_up.svg'

class Header extends Component {
  render() {
    return (
      <header id="head">
      <MenuEx />
        <div>
          <div className="nav">
            <img src={logo} alt="banner opendeurdag" />
            <nav className="menu">
              <ul>
                <li><AnchorLink href="#What">Wat</AnchorLink></li>
                <li><AnchorLink href="#Curriculums">Afstudeerrichtingen</AnchorLink></li>
                <li><AnchorLink href="#DidYouKnow">Wist je dat..</AnchorLink></li>
                <li><AnchorLink href="#Footer">Praktisch</AnchorLink></li>
              </ul>
            </nav>
          </div>
          <div className="banner">
            <div className="bannerImg" />
            <div className="bannerText">
              <div>
                <h1>Opendeurdag Grafische en Digitale Media</h1>
                <p className="info">
                  Kom alles te weten over de verschillende afstudeerrichtingen op onze campus tijdens de opendeurdag!
              </p>
                <p><i className="fas fa-calendar-alt icon"></i> 30 Juni 2018</p>
                <p><i className="far fa-clock icon"></i> 10:00 - 17:00</p>
                <p><i className="fas fa-map-marker icon"></i> Mediacampus: Industrieweg 232, 9030 Gent</p>
              </div>
            </div>
          </div>
        </div>
        {/*<a href="#head" className="arrowUp"><img src={arrow} alt="pijltje omhoog" /></a>*/}
      </header>
    );
  }
}

export default Header;