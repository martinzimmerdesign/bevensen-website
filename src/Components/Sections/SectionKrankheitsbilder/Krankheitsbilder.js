import React from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class Krankheitsbilder extends React.Component {

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
        <h1 class="elements-animate-in_bottom">Krankheitsbilder</h1>

          <div class="line elements-animate-in_bottom"></div>

<div>
        <ul class="list elements-animate-in_left">
        <li>Durchblutungsstörungen der hirnversorgenden Gefäße</li>
        <li>Durchblutungsstörungen der Arm- und Beinschlagadern</li>
        <li>Periphere arterielle Verschlußkrankheit - akuter Arterienverschluß</li>
        <li>Vaskulitiden - vasospastische Erkrankungen - arterielle Kompressionssyndrome</li>
        <li>Durchblutungsstörungen der Bauchorgane, insbesondere der Nieren</li>
        <li>Schlagaderaussackungen (Aneurysmen)</li>
        <li>Angiodysplasie - Arteriovenöse Fistel - Aneurysma spurium</li>
        <li>Venenerkrankungen: Varikose, chronisch venöse Insuffizienz, Thrombophlebitis, tiefe Venenthrombose</li>
        <li>Lymphödem - Lipödem</li>
        <li>chronische Wunden - Diabetischer Fuß - Ulcus cruris</li>
    </ul>
</div>
</div>
      );
  }
}
