import React from 'react';
import './LandingSection.css';
import anime from 'animejs/lib/anime.es.js';

export default class LandingSection extends React.Component {

  componentDidMount() {
    if (window.innerWidth > 920) {
        anime({
          targets: ".elements-animate-in_bottom-l",
          translateY: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 200})
        });

        anime({
          targets: ".elements-animate-in_right-l",
          translateX: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 800})
        });
    }
  }

render(){
  return(
<div class="content_section_parent">
    <h1 class="elements-animate-in_bottom-l">Sehr geehrte Patientinnen und Patienten,<br />
    liebe Kolleginnen und Kollegen,</h1>
    <p class="elements-animate-in_bottom-l">Als fachübergreifende Gemeinschaftspraxis mit mehreren Standorten können wir für unsere Region
    das gesamte ambulante Spektrum der Gefäßmedizin anbieten.<br />
    Einzelheiten erfahren Sie auf den folgenden Seiten.</p>

    <div class="line elements-animate-in_bottom-l"></div>

    <h2 class="elements-animate-in_right-l">Unsere Standorte</h2>

    <div class="standort_container_parent">
          <div class="standort_container_child elements-animate-in_right-l">
              <h3 class="elements-animate-in_right-l">Praxis Bad Bevensen</h3>
              <div class="standort_container_line elements-animate-in_right-l"></div>
              <p class="elements-animate-in_right-l">Römstedter Straße 25 | 29549 Bad Bevensen<br />(im Herz- und Gefäß-Zentrum)<br /><br />Tel.: 0 58 21 - 96 77 93 | Fax: 0 58 21 - 96 77 92<br />Email: info@gefaesspraxis-bevensen.de<br /><br />Montag - Donnerstag: 8:00 Uhr - 17:00 Uhr<br />Freitag: 8.00 Uhr - 14.00 Uhr
              </p>
          </div>

          <div class="standort_container_child elements-animate-in_right-l">
              <h3 class="elements-animate-in_right-l">Praxis Dannenberg</h3>
              <div class="standort_container_line elements-animate-in_right-l"></div>
                <p class="elements-animate-in_right-l">Hermann –Löns Str. 2 | 29451 Dannenberg<br />(in der CAPIO Elbe-Jeetzel Klinik)<br /><br />Tel.: 05861-838900 | Fax: 05861-838999<br />Email: info@gefaesspraxis-bevensen.de<br /><br />Montag - Donnerstag: 8:30 Uhr - 17:00 Uhr<br />Freitag: geschlossen</p>
          </div>
    </div>
</div>
      );
  }
}
