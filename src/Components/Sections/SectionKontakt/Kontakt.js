import React from 'react';
import './Kontakt.css';
import anime from 'animejs/lib/anime.es.js';

export default class Kontakt extends React.Component {

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
          targets: ".elements-animate-in_right",
          translateX: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 800})
        });
    }

render(){
  return(
    <div class="kontakt content_section_parent">
        <h1 class="elements-animate-in_bottom">Kontakt</h1>

<p class="elements-animate-in_bottom">
Tel.: 0 58 21 - 96 77 93<br />
Fax: 0 58 21 - 96 77 92<br />
E-Mail: <a href="#">info@gefaesspraxis-bevensen.de</a>
</p>

<div class="line elements-animate-in_bottom"></div>

    <div class="google_maps_parent elements-animate-in_right">

        <div class="google_maps_child">
        <div class="google_maps_child_text">
        <h3 class="elements-animate-in_right">Praxis Bad Bevensen</h3>
        <p class="elements-animate-in_right">Römstedter Straße 25 | 29549 Bad Bevensen<br />(im Herz- und Gefäß-Zentrum)<br /><br />Tel.: 0 58 21 - 96 77 93 | Fax: 0 58 21 - 96 77 92<br /><br />Montag - Donnerstag: 8:00 Uhr - 17:00 Uhr<br />Freitag: 8.00 Uhr - 14.00 Uhr
        </p>
        </div>
        <iframe width="398" height="329" src="https://maps.google.com/maps?width=398&amp;height=329&amp;hl=en&amp;q=R%C3%B6mstedter%20Str.%2025+(Praxis%20Bad%20Bevensen)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>

        <div class="google_maps_child">
        <div class="google_maps_child_text">
        <h3 class="elements-animate-in_right">Praxis Dannenberg</h3>
        <p class="elements-animate-in_right">Hermann –Löns Str. 2 | 29451 Dannenberg<br />(in der CAPIO Elbe-Jeetzel Klinik)<br /><br />Tel.: 05861-838900 | Fax: 05861-838999<br /><br />Montag - Donnerstag: 8:30 Uhr - 17:00 Uhr<br />Freitag: geschlossen</p>
        </div>
        <iframe width="398" height="329" src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Hermann%20%E2%80%93L%C3%B6ns%20Str.%202%2029451%20Dannenberg+(Titel)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>

    </div>


</div>

      );
  }
}
