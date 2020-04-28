import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './SectionWrapper.css';
import { motion } from "framer-motion";
import ScrollToTopOnMount from 'Components/ScrollToTopOnMount.js';

function SectionWrapper (props) {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.01,
    triggerOnce: true,
  })

  const variants = {
    initial: {
    },
    enter: {
    },
    exit: {
    }
  };

  const variants2 = {
          parent: {
            enter: {
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
              }
            }},
          title: {
            enter: { y: -20, opacity: 1 },
            exit: { y: 10, opacity: 0 }
          },
          children: {
            enter: { y: 0, opacity: 1, transition: {
              when: "beforeChildren",
            } },
            exit: { y: 20, opacity: 0 }
          }
      };

  return (
    <motion.div
    className={"section_parent " + props.addClass}
    ref={ref}
    variants={variants}
    initial="exit"
    animate={inView ? "enter" : "exit"}
    exit="exit">
        <ScrollToTopOnMount />
        <motion.div variants={variants2.parent}>
          <motion.div variants={variants2.children} className="title_background">
            <motion.h1 className="dont-break-out" variants={variants2.title}>{props.title}</motion.h1>
          </motion.div>
          <motion.p variants={variants2.children}>{props.subtitle}</motion.p>
          <motion.div variants={variants2.children} >{props.children}</motion.div>
        </motion.div>
    </motion.div>
  );
}
export default SectionWrapper;
