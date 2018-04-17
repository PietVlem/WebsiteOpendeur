import React, { Component } from 'react';
import CMO from '../images/CMO.jpg';
import NMD from '../images/NMD.jpg';
import AVD from '../images/AVD.jpg';
import GMB from '../images/GMB.jpg';

class Curriculums extends Component {
    render() {
        return (
            <div id="Curriculums" className="curriculumBackground">
                <div className="curriculumContent">
                    <div className="curriculumOverview">
                        <h1>Afstudeerrichtingen</h1>
                        <div className="h1Line" />
                        <div className="curriculumChoice">
                        <div className="curriculumExplaination">
                            <a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/crossmedia-ontwerp" rel="noopener noreferrer" target="_blank"><img src={CMO} alt="CMO" /></a>
                            <div className="info">
                                <h2>Crossmedia ontwerp</h2>
                                <p>Ontwerp van commerciële mediaproducten, zoals brand identities, apps,magazines, affiches, packaging en productfotografie</p>
                            </div>
                            <a className="infoLink" href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/crossmedia-ontwerp" rel="noopener noreferrer" target="_blank">Meer info over CMO</a>
                        </div>
                        <div className="curriculumExplaination">
                            <a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/new-media-development-multimediaproductie" rel="noopener noreferrer" target="_blank"><img src={NMD} alt="NMD" /></a>
                            <div className="info">
                                <h2>New Media Development</h2>
                                <p>Coderen van creatieve apps binnen web, mobile, Web of Things, VR ...</p>
                            </div>
                            <a className="infoLink" href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/new-media-development-multimediaproductie" rel="noopener noreferrer" target="_blank">Meer info over NMD</a>
                        </div>
                        <div className="curriculumExplaination">
                            <a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/audiovisual-design-multimediaproductie" rel="noopener noreferrer" target="_blank"><img src={AVD} alt="AVD" /></a>
                            <div className="info">
                            <h2>Audiovisual Design</h2>
                                <p>Audiovideoproducties, motion graphics in 2D &#38; 3D, multicam &#38; streaming.</p>
                            </div>
                            <a className="infoLink" href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/audiovisual-design-multimediaproductie" rel="noopener noreferrer" target="_blank">Meer info over AVD</a>
                        </div>
                        <div className="curriculumExplaination">
                            <a href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/grafimediabeleid" rel="noopener noreferrer" target="_blank"><img src={GMB} alt="GMB" /></a>
                            <div className="info">
                                <h2>Grafimedia - beleid</h2>
                                <p>Combinatie van technisch inzicht met communicatieve en commerciële skills.</p>
                            </div>
                            <a className="infoLink" href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/grafimediabeleid" rel="noopener noreferrer" target="_blank">Meer info over GMB</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Curriculums;