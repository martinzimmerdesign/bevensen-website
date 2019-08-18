import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';


export default class Footer extends React.Component {

  componentDidMount() {
        anime({
          targets: ".elements-animate-in_bottom",
          translateY: ["400px", "0px"],
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

<div class="footer_parent elements-animate-in_bottom">

    <div class="footer_part_parent">
      <div class="footer_part_child footer_part_left">
        <p class="footer_text">
Tel.: 0 58 21 - 96 77 93<br />
Fax: 0 58 21 - 96 77 92<br />
E-Mail: <a href="#">info@gefaesspraxis-bevensen.de</a>
        </p>
      </div>
    </div>

<div class="footer_line"></div>



    <div class="footer_part_parent">
      <div class="footer_part_child footer_part_right">
        <p class="footer_text">
<NavLink to="/impressum">Impressum</NavLink><br />
<NavLink to="/datenschutzerklärung">Datenschutzerklärung</NavLink><br />
Copyright © 2019 Gefäßpraxis Bevensen
        </p>
      </div>
    </div>

</div>

      );
  }
}
