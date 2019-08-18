import React from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class Leistungen extends React.Component {

  componentDidMount() {
        anime({
          targets: ".elements-animate-in_bottom",
          translateY: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 200})
        });

        anime({
          targets: ".elements-animate-in_left",
          translateX: ["-30px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 800})
        });
    }

render(){
  return(
    <div class="content_section_parent">
        <h1 class="elements-animate-in_bottom">Leistungen</h1>

          <div class="line elements-animate-in_bottom"></div>


        <p class="elements-animate-in_left">Hier finden Sie eine kurze Auflistung unsere Leistungen.</p>

<div>
        <ul class="list elements-animate-in_left">
        <li>Farbduplexsonographie</li>
        <li>Systolischer Knöcheldruck</li>
        <li>Oszillographie</li>
        <li>Akrale Plethysmographie</li>
        <li>Vitalkapillarmikroskopie</li>
        <li>Lichtreflexionsrheographie</li>
        <li>Venenverschlussplethysmographie</li>
        <li>Laufbandtest</li>
        <li>Intermittierende apparative Kompressionstherapie</li>
        <li>Infusionstherapie</li>
        <li>Behandlung chronischer Wunden - Debridement</li>
        <li>Bedarfsgerechte Krampfaderbehandlung unter medizinischen und kosmetischen Aspekten:
ambulante Operationen in Allgemein- oder Lokalanästhesie, endovenöse Radiofrequenzablation , Verödungstherapie</li>
    </ul>
</div>
</div>
      );
  }
}
