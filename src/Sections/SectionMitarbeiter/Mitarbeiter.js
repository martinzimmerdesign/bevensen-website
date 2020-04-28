import React from 'react';
import './Mitarbeiter.css';
import imgGrahl from './img/grahl.png';
import imgBraun from './img/braun.png';
import imgPflugradt from './img/pflugradt.png';
import imgTeam from './img/team.png';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper.js';
import { motion } from "framer-motion";

const variants = {
        parent: {
          enter: {
            transition: {
              staggerChildren: 0.06,
            }
          }},
        title: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 20, opacity: 0 }
        },
        children: {
          enter: { x: 0, opacity: 1,transition: {
            when: "beforeChildren",
            staggerChildren: 0.06,
          } },
          exit: { x: 50, opacity: 0 }
        }
    };

const Leistungen = () =>
      <div>
        <SectionWrapper title="Mitarbeiter" subtitle="Wir sind ein starkes und motiviertes Team.">
        <motion.div variants={variants.parent} className="mitarbeiter">
          <motion.h2 variants={variants.title}>Unsere Ärzte</motion.h2>
          <motion.div variants={variants.parent} className="aerzte_image_parent">
            <motion.div variants={variants.children} className="arzt_image_wrapper">
                <motion.img variants={variants.children} className="arzt_image" alt="Grahl Image" src={imgGrahl}></motion.img>
                <motion.h3 variants={variants.children}>Dr. med. Katja Grahl</motion.h3>
                <motion.h4 variants={variants.children}>Fachärztin Innere Medizin-Angiologie</motion.h4>
            </motion.div>
            <motion.div variants={variants.children} className="arzt_image_wrapper">
                <motion.img variants={variants.children} className="arzt_image" alt="Braun Image" src={imgBraun}></motion.img>
                <motion.h3 variants={variants.children}>Dr. med. Stephan Braun</motion.h3>
                <motion.h4 variants={variants.children}>Facharzt Chirurgie-Gefäßchirurgie</motion.h4>
            </motion.div>
            <motion.div variants={variants.children} className="arzt_image_wrapper">
                <motion.img variants={variants.children} className="arzt_image" alt="Pflugradt Image" src={imgPflugradt}></motion.img>
                <motion.h3 variants={variants.children}>Dr. med. Axel Pflugradt</motion.h3>
                <motion.h4 variants={variants.children}>Facharzt Chirurgie-Gefäßchirurgie</motion.h4>
            </motion.div>
          </motion.div>
        <motion.h2 variants={variants.title} transition={{delay: 0.6}}>Unser Team</motion.h2>
        <motion.div variants={variants.title} transition={{delay: 0.8}} className="team_image_parent">
          <motion.img className="team_image" alt="Team Image" src={imgTeam}></motion.img>
        </motion.div>
      </motion.div>
      </SectionWrapper>
    </div>
export default Leistungen;
