import React from 'react';
import './Mitarbeiter.css';
import imgGrahl from './img/grahl.png';
import imgBraun from './img/braun.png';
import imgPflugradt from './img/pflugradt.png';
import imgTeam from './img/team.png';
import imgGrahlWebp from './img/grahl.webp';
import imgBraunWebp from './img/braun.webp';
import imgPflugradtWebp from './img/pflugradt.webp';
import imgTeamWebp from './img/team.webp';
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
              <motion.picture>
                <source srcSet={imgGrahlWebp} type="image/webp" />
                <source srcSet={imgGrahl} type="image/png" />
                <img src={imgGrahl} className="arzt_image" alt="Grahl" />
              </motion.picture>
                <motion.h3 variants={variants.children}>Dr. med. Katja Grahl</motion.h3>
                <motion.h4 variants={variants.children}>Fachärztin Innere Medizin-Angiologie</motion.h4>
            </motion.div>
            <motion.div variants={variants.children} className="arzt_image_wrapper">
              <motion.picture variants={variants.children}>
                <source srcSet={imgBraunWebp} type="image/webp" />
                <source srcSet={imgBraun} type="image/png" />
                <img className="arzt_image" alt="Braun" src={imgBraun} />
              </motion.picture>
                <motion.h3 variants={variants.children}>Dr. med. Stephan Braun</motion.h3>
                <motion.h4 variants={variants.children}>Facharzt Chirurgie-Gefäßchirurgie</motion.h4>
            </motion.div>
            <motion.div variants={variants.children} className="arzt_image_wrapper">
              <motion.picture variants={variants.children}>
                <source srcSet={imgPflugradtWebp} type="image/webp" />
                <source srcSet={imgPflugradt} type="image/png" />
                <img className="arzt_image" alt="Pflugradt" src={imgPflugradt} />
              </motion.picture>
                <motion.h3 variants={variants.children}>Dr. med. Axel Pflugradt</motion.h3>
                <motion.h4 variants={variants.children}>Facharzt Chirurgie-Gefäßchirurgie</motion.h4>
            </motion.div>
          </motion.div>
        <motion.h2 variants={variants.title} transition={{delay: 0.6}}>Unser Team</motion.h2>
        <motion.div variants={variants.title} transition={{delay: 0.8}} className="team_image_parent">
          <motion.picture variants={variants.children}>
            <source srcSet={imgTeamWebp} type="image/webp" />
            <source srcSet={imgTeam} type="image/png" />
            <img className="team_image" alt="Team" src={imgTeam} />
          </motion.picture>
        </motion.div>
      </motion.div>
      </SectionWrapper>
    </div>
export default Leistungen;
