import React, { Component } from 'react';

import SimpleMap from './Map';

class Footer extends Component {
    render() {
        return (
            <footer id="Footer">
                <div className="contact">
                    <div className="map">
                        <SimpleMap />
                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/GrafischeendigitalemediaArteveldehogeschool/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/madebygdm/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/arteveldegdm" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://vimeo.com/bachelorgdm" rel="noopener noreferrer" target="_blank"><i className="fab fa-vimeo-v"></i></a>
                        <a href="mailto:infografischedigitalemedia@arteveldehs.be" ><i className="fas fa-envelope svg"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;