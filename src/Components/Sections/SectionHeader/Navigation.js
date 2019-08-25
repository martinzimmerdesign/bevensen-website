import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import Header from './Header/Header.js';
import $ from 'jquery';


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export default class Navigation extends React.Component {

	constructor (props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isMenuClicked: true
    };

	}

// Ändert den State so, dass die Navigation bei Mobile false und bei Desktop true ist //
		componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
		    this.resize();

        anime({
          targets: ".elements-animate-in_w",
          translateY: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: 250,
        });

		}

		resize() {
		    this.setState({isMenuClicked: window.innerWidth >= 760});
		}
// Ende //


	handleClick() {


	      if (this.state.isMenuClicked === false) {
	    anime({
	        targets: '.navigation_parent',
	        translateX: ['100%', '0'],
	        loop: false,
	        duration: 600,
	        delay: 0,
	        easing: "easeOutQuart",
	    })

	    anime({
	        targets: '.navigation_inner_parent li',
	        opacity: ['0', '1'],
	        translateX: ['90px', '0px'],
	        loop: false,
	        duration: 400,
	        delay: anime.stagger(100),
	        easing: "easeInCirc",
	    })

	    anime({
	        targets: '.top',
	        top: {
	            value: ['0px', '10px'],
	            duration: 600,
	            easing: 'easeOutQuart'
	        },
	        rotate: {
	            value: '45deg',
	            duration: 800,
	            delay: 600,
	            easing: 'easeInOutQuint'
	        },
	        delay: 0
	    });

	    anime({
	        targets: '.bottom',
	        top: {
	            value: ['20px', '10px'],
	            duration: 600,
	            easing: 'easeOutQuart'
	        },
	        rotate: {
	            value: '135deg',
	            duration: 800,
	            delay: 600,
	            easing: 'easeInOutQuint'
	        },
	        delay: 0
	    });

	    anime({
	        targets: '.middle',
	        opacity: ['1', '0'],
	        duration: 100,
	        delay: 600,
	        easing: "linear",
	    })

	    }
	    else {

	        anime({
	            targets: '.top',
	            top: {
	                value: ['10px', '0px'],
	                duration: 600,
	                delay: 800,
	                easing: 'easeOutQuint'
	            },
	            rotate: {
	                value: '0deg',
	                duration: 800,
	                easing: 'easeOutQuart'
	            },
	            delay: 0
	        });

	        anime({
	            targets: '.bottom',
	            top: {
	                value: ['10px', '20px'],
	                duration: 600,
	                delay: 800,
	                easing: 'easeOutQuint'
	            },
	            rotate: {
	                value: '0deg',
	                duration: 800,
	                easing: 'easeOutQuart'
	            },
	            delay: 0
	        });

	        anime({
	            targets: '.middle',
	            opacity: ['0', '1'],
	            duration: 100,
	            delay: 600,
	            easing: "linear",
	        })

	    }

	this.setState(this.toggleClickState);
	  }

	  toggleClickState(state) {
	    return {
	      isMenuClicked: !state.isMenuClicked
	    };
	  }



render(){

	const navStyle = {
	  borderBottom: "1.5px solid #D74444",
	  color: "#3E3E3E"
	};

  return(
		<div>

		<div class="desktop_header">
<Header />
		</div>


  <div className={ this.state.isMenuClicked ? "nav_mobile_button_parent nav_mobile_button_parent_change" : "nav_mobile_button_parent" } onClick={this.handleClick}>
      <h2 class="nav_name">MENÜ</h2>
      <div class="nav_hamburger_parent">
          <div class="top"></div>
          <div class="middle"></div>
          <div class="bottom"></div>
    </div>
</div>


    <nav class="navigation_parent elements-animate-in_w" style={{ display: this.state.isMenuClicked ? "block" : "none" }}>
			<ul class="navigation_inner_parent">
    	<li><NavLink exact={true} activeStyle={navStyle} to="/" >Startseite</NavLink></li>
			<li><NavLink activeStyle={navStyle} to="/mitarbeiter">Mitarbeiter</NavLink></li>
			<li><NavLink activeStyle={navStyle} to="/ausbildung">Ausbildung</NavLink></li>
			<li><NavLink activeStyle={navStyle} to="/krankheitsbilder">Krankheitsbilder</NavLink></li>
			<li><NavLink activeStyle={navStyle} to="/leistungen">Leistungen</NavLink></li>
			<li><NavLink activeStyle={navStyle} to="/kontakt">Kontakt</NavLink></li>
			<li><NavLink activeStyle={navStyle} to="/datenschutz">Datenschutz</NavLink></li>
			</ul>
    </nav>

		<div class="mobile_header">
<Header />
		</div>

		</div>
      );
  }
}
