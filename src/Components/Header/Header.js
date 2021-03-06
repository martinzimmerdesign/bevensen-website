import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from './img/logo.png';
import logoWebp from './img/logo.webp';
import telefonWebp from './img/icon_telefon.webp';
import telefon from './img/icon_telefon.png';
import { motion } from "framer-motion";

const variants = {
        parent: {
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeOut",
              when: "beforeChildren",
              staggerChildren: 0.3,
            }
          }, exit: {
            y: 50,
            opacity: 0,
          }
        },
        title: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 20, opacity: 0 }
        },
        children: {
          enter: { y: 0, opacity: 1,transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
          } },
          exit: { y: 50, opacity: 0 }
        }
    };

const Header = () =>
    <motion.div variants={variants.parent} className="header"
    initial="exit"
    animate="enter"
    exit="exit">
      <motion.div variants={variants.children} className="header_logo">
        <NavLink to="/">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <source srcSet={logo} type="image/png" />
            <img src={logo} alt="Praxis Logo" />
          </picture>
      </NavLink>
      </motion.div>
      <motion.div variants={variants.children} className="header_text">
        <div className="header_line"></div>
        <p><span>Gemeinschaftspraxis</span><br />
        Dr. med. Katja Grahl & Dr. med. Stephan Braun & Dr. med. Axel Pflugradt</p>
      </motion.div>
      <motion.div variants={variants.children} className="telefon_container">
        <picture>
          <source srcSet={telefonWebp} type="image/webp" />
          <source srcSet={telefon} type="image/png" />
          <img src={telefon} alt="Telefon Icon" />
        </picture>
        <p>0 58 21 - 96 77 93</p>
      </motion.div>
    </motion.div>
export default Header;
