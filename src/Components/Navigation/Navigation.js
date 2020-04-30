import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './Navigation.css';
import useCurrentWitdh from 'Hooks/useCurrentWitdh.js';

export default function Navigation() {

  const width = useCurrentWitdh();

  const variants = {
    initial: {},
    enter: {},
    exit: {}
  };

  const variantsNavMobile = {
          navigationContainer: {
            enter: {
              x: "0vw",
              transition: {
                duration: 0.3,
              }
            },
            exit: {
              x: "100vw",
              transition: {
                duration: 0.3,
              }
            }
          },
          navigationStagger: {
            enter: {
              transition: {
                staggerChildren: 0.06,
              }
            }},
          navigationElements: {
            enter: { x: 0, opacity: 1 },
            exit: { x: 30, opacity: 0 }
          }
      };

  const variantsNavDesktop = {
          navigationContainer: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                  ease: "easeOut",
                  when: "beforeChildren",
                  staggerChildren: 0.3,
              }
            },
            exit: {
              x: 0,
              opacity: 0,
              transition: {
              }
            }
          },
          navigationStagger: {
            enter: {
              transition: {
                staggerChildren: 0.06,
              }
            }},
          navigationElements: {
            enter: { y: 0, opacity: 1 },
            exit: { y: 30, opacity: 0 }
          },
          navigationLine: {
            enter: { y: 0, opacity: 1 },
            exit: { y: 10, opacity: 0 }
          }
      };

  const variantsHamburger = {
          hamburgerTop: {
            enter: {
              y: "8px",
              rotate: "45deg",
            },
            exit: {
              y: "0px",
              rotate: "0deg",
          }
        },
          hamburgerCenter: {
            enter: {
              opacity: 0,
              width: "0px",
            },
            exit: {
              opacity: 1,
              width: "30px",
              transition: {ease: "easeOut"}
          }
        },
          hamburgerBottom: {
            enter: {
              y: "-8px",
              rotate: "-45deg",
            },
            exit: {
              y: "0px",
              rotate: "0deg",
          }
        },
      };

  const navStyle = {
    fontWeight: 'bold',
    color: 'var(--color-dark-blue)',
    borderBottom: '2px solid var(--color-light-blue)'
  };

  const [isOpen, setOpen] = useState(width > 1280 ? true : false);

  useEffect(() => {
    if(width > 1280) {
      setOpen(true);
    }
    if(width <= 1280) {
      setOpen(false);
    }
  }, [width]);

  return (
    <motion.div
      variants={variants}
      initial="exit"
      animate={isOpen ? "enter" : "exit"}
      exit="exit">
      <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.3 }} className="navigation_button" onClick={() => setOpen(!isOpen)}>
        <motion.p>Menü</motion.p>
        <motion.div className="hamburger">
          <motion.div variants={variantsHamburger.hamburgerTop} className="hamburger_element"></motion.div>
          <motion.div variants={variantsHamburger.hamburgerCenter} className="hamburger_element"></motion.div>
          <motion.div variants={variantsHamburger.hamburgerBottom} className="hamburger_element"></motion.div>
        </motion.div>
      </motion.div>
      <motion.div variants={width > 1280 ? variantsNavDesktop.navigationContainer : variantsNavMobile.navigationContainer} className="navigation_list_wrapper">
  			<motion.ul variants={width > 1280 ? variantsNavDesktop.navigationStagger : variantsNavMobile.navigationStagger} className="navigation_list" onClick={() => setOpen(width < 1280 ? !isOpen : true)}>
  	    	<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink exact={true} activeStyle={navStyle} to="/" >Startseite</NavLink></motion.li>
  				<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink activeStyle={navStyle} to="/mitarbeiter">Mitarbeiter</NavLink></motion.li>
  				<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink activeStyle={navStyle} to="/ausbildung">Ausbildung</NavLink></motion.li>
  				<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink activeStyle={navStyle} to="/krankheitsbilder">Krankheitsbilder</NavLink></motion.li>
  				<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink activeStyle={navStyle} to="/leistungen">Leistungen</NavLink></motion.li>
  				<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink activeStyle={navStyle} to="/kontakt">Kontakt</NavLink></motion.li>
  				<motion.li variants={width > 1280 ? variantsNavDesktop.navigationElements : variantsNavMobile.navigationElements}><NavLink activeStyle={navStyle} to="/datenschutz">Datenschutz</NavLink></motion.li>
  			</motion.ul>
        <motion.div variants={width > 1280 ? variantsNavDesktop.navigationLine : variantsNavMobile.navigationElements}className="navigation_line"></motion.div>
      </motion.div>
    </motion.div>
  );
}
