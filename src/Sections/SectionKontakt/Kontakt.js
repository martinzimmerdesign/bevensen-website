import React from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper.js';
import './Kontakt.css';
import { motion } from "framer-motion";

const variants = {
        parent: {
          enter: {
            transition: {
              staggerChildren: 0.1,
            }
          }},
        title: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 20, opacity: 0 }
        },
        children: {
          enter: { y: 0, opacity: 1,transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
          } },
          exit: { y: 50, opacity: 0 }
        }
    };

const Kontakt = () =>
      <div>
        <SectionWrapper title="Kontakt">
        <motion.div variants={variants.parent} className="kontakt">
          <motion.p variants={variants.title}>E-Mail: <a href="mailto:info@gefaesspraxis-bevensen.de">info@gefaesspraxis-bevensen.de</a></motion.p>

          <motion.h2 variants={variants.title}>So <span>erreichen sie uns.</span></motion.h2>

          <motion.div variants={variants.children} className="location_container">
            <motion.div variants={variants.children} className="location_text_container">
              <h3>Praxis Bad Bevensen</h3>
              <p>Römstedter Straße 25 | 29549 Bad Bevensen<br />(im Herz- und Gefäß-Zentrum)<br /><br /><span>Telefon:</span> 0 58 21 - 96 77 93<br /><span>Fax:</span> 0 58 21 - 96 77 92<br /><br /><span>Öffnungszeiten:</span><br />Montag - Donnerstag: 8:00 Uhr - 17:00 Uhr<br />Freitag: 8.00 Uhr - 14.00 Uhr</p>
            </motion.div>
            <motion.div className="location_image bevensen" variants={variants.children} onClick={()=> window.open("https://www.google.com/maps?ll=53.085583,10.603598&z=17&t=m&hl=en&gl=US&mapclient=embed&q=R%C3%B6mstedter+Str.+25+29549+Bad+Bevensen", "_blank")}>
              <p><a href="https://www.google.com/maps?ll=53.085583,10.603598&z=17&t=m&hl=en&gl=US&mapclient=embed&q=R%C3%B6mstedter+Str.+25+29549+Bad+Bevensen">Zu Google Maps</a></p>
            </motion.div>
          </motion.div>

          <motion.div variants={variants.children} className="location_container">
            <motion.div variants={variants.children} className="location_text_container">
              <h3>Praxis Dannenberg</h3>
              <p>Hermann –Löns Str. 2 | 29451 Dannenberg<br />(in der CAPIO Elbe-Jeetzel Klinik)<br /><br /><span>Telefon:</span> 0 58 61 - 83 89 00<br /><span>Fax:</span> 0 58 61 - 83 89 99<br /><br /><span>Öffnungszeiten:</span><br />Montag - Donnerstag: 8:30 Uhr - 17:00 Uhr<br />Freitag: geschlossen</p>
            </motion.div>
            <motion.div variants={variants.children} className="location_image dannenberg" onClick={()=> window.open("https://www.google.com/maps/place/Hermann-L%C3%B6ns-Stra%C3%9Fe+2,+29451+Dannenberg+(Elbe),+Germany/@53.0830901,11.078083,17z/data=!3m1!4b1!4m5!3m4!1s0x47ae4679641547b1:0x3b61640edba429ff!8m2!3d53.0830901!4d11.0802717?hl=en", "_blank")}>
              <p><a href="https://www.google.com/maps/place/Hermann-L%C3%B6ns-Stra%C3%9Fe+2,+29451+Dannenberg+(Elbe),+Germany/@53.0830901,11.078083,17z/data=!3m1!4b1!4m5!3m4!1s0x47ae4679641547b1:0x3b61640edba429ff!8m2!3d53.0830901!4d11.0802717?hl=en">Zu Google Maps</a></p>
            </motion.div>
          </motion.div>
        </motion.div>
        </SectionWrapper>
    </div>
export default Kontakt;
