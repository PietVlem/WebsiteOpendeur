import React, { Component } from 'react';

class DidYouKnow extends Component {
  render() {
    return (
      <div id="DidYouKnow" className="DidYouKnowBackGround">
        <div className="DidYouKnowContent">
          <h1>Wist je dat..</h1>
          <div className="h1Line" />
          <div className="bodyQuestions">
            <div>
              <p>
                <i className="fas fa-question iconWhite"></i><br />
                <span className="h3">... Studenten in deze opleiding een laptop nodig hebben en hiervoor zelf kunnen kiezen tussen een Mac of PC?</span><br />
                <span className="explain">Meer info op deze <a target="_blank" rel="noopener noreferrer" className="whiteLink" href="https://www.arteveldehogeschool.be/opleidingen/bachelor/grafische-en-digitale-media/iets-voor-jou/welke-laptop-heb-ik-nodig">website</a></span>
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-laptop iconWhite"></i>
                <span className="h3">.... De minimale laptopvereisten  voor deze opleiding:</span><br />
                <span className="explain">i5 processor | 8 GB RAM | 2GB grafisch geheugen | Ethernet outlet (RJ45) of adapter</span>
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-globe iconWhite"></i>
                <span className="h3">... Het aangeraden is om een netwerkkabel aan te kopen van 1,5 tot 2 meter type CAT5 of CAT6. Voor pc-gebruikers komt een tweede batterij ook van pas.</span><br />
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-bus iconWhite"></i>
                <span className="h3">... Er ’s morgens voor de eerste en ‘s avonds na de laatste les 5 rechtstreekse busverbindingen zijn vanaf het St-Pietersstation van en naar deze campus.</span><br />
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-car iconWhite"></i>
                <span className="h3">... De studenten GRATIS op de mediacampus kunnen parkeren!</span><br />
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-desktop iconWhite"></i>
                <span className="h3">... De aanbevolen laptop voor deze opleiding:</span><br />
                <span className="explain">i7 processor | 8GB RAM | 2GB grafisch geheugen | SSD-schijf</span>
              </p>
            </div>
            <div>
              <p>
                <i className="far fa-money-bill-alt iconWhite"></i>
                <span className="h3">... Het inschrijvingsgeld voor academiejaar 2019-2020:</span><br />
                <span className="explain">
                  <li>Beursstudent: 108,80 euro</li>
                  <li>Bijna beursstudent: 484,30 euro</li>
                  <li>Niet beursstudent: 922,30 euro</li>
                </span>
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-briefcase iconWhite"></i>
                <span className="h3">... 90% van onze afstuderende studenten binnen de 6 maand werk hebben in de sector!</span><br />
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-home iconWhite"></i>
                <span className="h3">... Er ook studentenkoten zijn in de buurt van de mediacampus Mariakerke. En dat ze vaak goedkoper zijn. Adressenlijsten zijn verkrijgbaar op de opendeurdag van 30 juni.</span><br />
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-shopping-cart iconWhite"></i>
                <span className="h3">... De kost aan software tijdens de opleiding minimaal is:</span><br />
                <span className="explain">
                  <li><strong>ADOBE CREATIVE CLOUD</strong> 64,99 euro incl. BTW/jaar via <a target="_blank" rel="noopener noreferrer" href="http://www.academicshop.be">academicshop</a>  i.p.v. de normale prijs van 725,85 per jaar.</li>
                  <li><strong>OFFICE 365</strong> Gratis via <a target="_blank" rel="noopener noreferrer" href="https://www.office.com">Office</a></li>
                </span>
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-utensils iconWhite"></i>
                <span className="h3">... Op de campus broodjes, pasta, salades, geleverd worden door een simpele sms te versturen naar een traiteur voor 10.00 uur. Heel simpel, goedkoop maar bovenal héél lekker!</span><br />
              </p>
            </div>
            <div>
              <p>
              <i className="fas fa-bicycle iconWhite"></i>
                <span className="h3">... Het met de fiets vanaf de coupure (centrum Gent) of vanaf het station naar de mediacampus 8km is.</span><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DidYouKnow;