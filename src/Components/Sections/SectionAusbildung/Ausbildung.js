import React from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class Ausbildung extends React.Component {

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
        <h1 class="elements-animate-in_bottom">Ausbildung</h1>

          <div class="line elements-animate-in_bottom"></div>

<div>
<p class="elements-animate-in_left">1. Weiterbildung im Fachgebiet Angiologie für 12 Monate.<br />Die Ermächtigung hierfür hat Frau Dr. Grahl von der Ärztekammer Niedersachsen erhalten.<br />
<br />
2. Ausbildung zur medizinischen Fachangestellten (w/m)<br />

Bei Interesse kontaktieren Sie uns bitte direkt.</p>
</div>
</div>
      );
  }
}
