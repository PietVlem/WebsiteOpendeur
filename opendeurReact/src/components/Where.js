import React, { Component } from 'react';

class Where extends Component {
    render() {
        return (
            <div id="Where" className="where">
                <div>
                    <h1>Praktisch</h1>
                    <div className="h1Line" />
                    <div className="half">
                        <div>
                            <h2><i className="fas fa-bus"></i> Met de bus</h2>
                            <p>
                                Sint-Pietersstation - 65 Ursel<br />
                                Sint-Pietersstation - 67 Eeklo
                        </p>
                        </div>
                        <div className="car">
                            <h2><i className="fas fa-car"></i> Met de auto</h2>
                            <p>
                                Campus Mariakerke ligt dicht bij het kruispunt van de R4 (de ring rond Gent) en de N9 die Gent met Eeklo verbindt.
                        </p>
                        </div>
                    </div>
                    <div className="half">
                        <h2><i className="fas fa-bicycle"></i> Met de fiets</h2>
                        <p>
                            Als je in Gent centrum vertrekt, ben je met de fiets ongeveer twintig minuten onderweg naar campus Mariakerke. Je rijdt zo goed als het volledige traject langs de Brugse Vaart. Volg achtereenvolgens
                            Coupure Links, Zuidkaai, Groendreef, Gérard Willemotlaan en Trekweg. Sla links af aan de Vinderhoutsedam en rij vervolgens door de fietstunnel en over de brug van de R4 tot aan onze campus.
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Where;

