import React from 'react';
import './Header.css';
import headerImg from './img/header8.png';
import anime from 'animejs/lib/anime.es.js';
import { NavLink } from "react-router-dom";

export default class HeaderSection extends React.Component {

  componentDidMount() {
        anime({
          targets: ".elements-animate-in_right_h",
          translateX: ["30px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: 1200,
        });

        anime({
          targets: ".elements-animate-in_z",
          translateX: ["-30px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: 1200,
        });
        anime({
          targets: ".elements-animate-in_c",
          translateY: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: 200,
        });
    }

render(){
  return(
<div class="header_parent elements-animate-in_c">
      <p class="elements-animate-in_right_h">Tel.: 04131 66 77 3</p>
      <div class="header_image_parent">
        <NavLink to="/"><div class="logo_header">
          <h1 class="elements-animate-in_z" >Gefäss<span>praxis</span></h1>
          <h2 class="elements-animate-in_z" >Bevensen</h2>
        </div></NavLink>
        <img class="header_image" alt="Header Image" src={headerImg}></img>
      </div>
</div>
      );
  }
}
