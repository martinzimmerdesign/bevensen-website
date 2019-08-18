import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Footer/Footer.js';
import LandingSection from './SectionLandingSection/LandingSection.js';
import Mitarbeiter from './SectionMitarbeiter/Mitarbeiter.js';
import Ausbildung from './SectionAusbildung/Ausbildung.js';
import Krankheitsbilder from './SectionKrankheitsbilder/Krankheitsbilder.js';
import Leistungen from './SectionLeistungen/Leistungen.js';
import Kontakt from './SectionKontakt/Kontakt.js';
import Datenschutz from './SectionDatenschutz/Datenschutz.js';
import Impressum from './SectionImpressum/Impressum.js';
import Datenschutzerklärung from './SectionDatenschutzerklärung/Datenschutzerklärung.js';
import Navigation from './SectionHeader/Navigation.js';


export default class SectionsContainer extends React.Component {
	componentDidMount() {}




render(){

  return(
    <div>
    <div>
      <React.Fragment>
        <Router>
				<Navigation />
              <Switch>
							  <Route exact path="/" component={LandingSection}/>
							  <Route path="/mitarbeiter" component={Mitarbeiter}/>
								<Route path="/ausbildung" component={Ausbildung}/>
								<Route path="/krankheitsbilder" component={Krankheitsbilder}/>
								<Route path="/leistungen" component={Leistungen}/>
								<Route path="/kontakt" component={Kontakt}/>
								<Route path="/datenschutz" component={Datenschutz}/>
								<Route path="/impressum" component={Impressum}/>
								<Route path="/datenschutzerklärung" component={Datenschutzerklärung}/>
          		</Switch>
				<Footer />
        </Router>
      </React.Fragment>
    </div>
    </div>
      );
  }
}
