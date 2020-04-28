import React, { useEffect } from 'react';
import SectionWrapper from 'Components/SectionWrapper/SectionWrapper.js';
import Kontakt from 'Sections/SectionKontakt/Kontakt.js';

function ScrollLandingPage(props) {
  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
  return null;
}

const LandingSection = () =>
      <div>
        <SectionWrapper title="Herzlich Willkommen">
          <ScrollLandingPage />
        <div className="landing_section_text">
          <p><span>Sehr geehrte Patientinnen und Patienten, liebe Kolleginnen und Kollegen,</span><br />
          Als fachübergreifende Gemeinschaftspraxis mit mehreren Standorten können wir für unsere Region
          das gesamte ambulante Spektrum der Gefäßmedizin anbieten.<br />
          Einzelheiten erfahren Sie auf den folgenden Seiten.</p>
        </div>
        <Kontakt />
        </SectionWrapper>
    </div>
export default LandingSection;
