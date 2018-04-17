import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class What extends Component {
    render() {
        return (
            <div id="What" className="what">
                <h1>Wat te zien, wat te doen?</h1>
                <div className="h1Line" />
                
                <p className="whatText">
                    Vergaap je aan de <span className="yellowHighlighted">werken van onze studenten</span> die verspreid zijn over de hele campus, én aan die van externe experten, geëxposeerd in de mediatheek. Neem een kijkje in onze <span className="yellowHighlighted">ateliers</span> en print &amp; sign-lokalen, en pik meteen ook een workshop stickers printen mee.
                    Check <span className="yellowHighlighted">Ciné GDM</span>, en bewonder de <span className="yellowHighlighted">externe projecten</span>, volledig uitgewerkt door onze laatstejaars. Oh ja, vergeet ook niet om je bezoek te vereeuwigen met een ludieke foto in onze <span className="yellowHighlighted">GDM Photobooth</span>! En laat alles rustig bezinken met een hapje, voorgeschoteld door één van de <span className="yellowHighlighted">foodtrucks</span>, en een drankje in ons <span className="yellowHighlighted">GDM-praatcafé</span>.
                </p>         
                {/*
                <div className="animatedText">
                    <p>Ontdenk</p>
                    <Typing loop="true">
                        <span>Werken van studenten</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={20} />
                        <span>Onze workshops</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={14} />
                    </Typing>
                </div>
                 */}
            </div>
        );
    }
}

export default What;