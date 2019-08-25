import React from 'react';
import './Mitarbeiter.css';
import anime from 'animejs/lib/anime.es.js';
import imgGrahl from './img/grahl.png';
import imgBraun from './img/braun.png';
import imgPflugradt from './img/pflugradt.png';
import imgTeam from './img/team.png';

export default class Mitarbeiter extends React.Component {

  componentDidMount() {
    if (window.innerWidth > 920) {
        anime({
          targets: ".elements-animate-in_bottom-m",
          translateY: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 200})
        });

        anime({
          targets: ".elements-animate-in_right-m",
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
        <h1 class="elements-animate-in_bottom-m">Mitarbeiter</h1>

          <div class="line elements-animate-in_bottom-m"></div>
<h2 class="elements-animate-in_right-m">Unsere Ärzte</h2>
<div class="aerzte_image_parent">
  <div class="arzt_image_wrapper elements-animate-in_right-m">
      <img class="arzt_image" alt="Grahl Image" src={imgGrahl}></img>
      <h3>Dr. med. Katja Grahl</h3>
      <h4>Fachärztin Innere Medizin-Angiologie</h4>
  </div>
  <div class="arzt_image_wrapper elements-animate-in_right-m">
      <img class="arzt_image" alt="Braun Image" src={imgBraun}></img>
      <h3>Dr. med. Stephan Braun</h3>
      <h4>Facharzt Chirurgie-Gefäßchirurgie</h4>
  </div>
  <div class="arzt_image_wrapper elements-animate-in_right-m">
      <img class="arzt_image" alt="Pflugradt Image" src={imgPflugradt}></img>
      <h3>Dr. med. Axel Pflugradt</h3>
      <h4>Facharzt Chirurgie-Gefäßchirurgie</h4>
  </div>
</div>

<h2 class="elements-animate-in_right-m">Unser Team</h2>
<div class="team_image_parent elements-animate-in_right-m">
  <img class="team_image" alt="Team Image" src={imgTeam}></img>
</div>

</div>


      );
  }
}
