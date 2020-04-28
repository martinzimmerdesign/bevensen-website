import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from 'Components/Footer/Footer.js';
import LandingSection from './LandingSection.js';
import Mitarbeiter from './SectionMitarbeiter/Mitarbeiter.js';
import Ausbildung from './Ausbildung.js';
import Krankheitsbilder from './Krankheitsbilder.js';
import Leistungen from './Leistungen.js';
import Kontakt from './SectionKontakt/Kontakt.js';
import Datenschutz from './Datenschutz.js';
import Impressum from './Impressum.js';
import Datenschutzerklärung from './Datenschutzerklärung.js';
import Navigation from 'Components/Navigation/Navigation.js';
import Header from 'Components/Header/Header.js';

export default class SectionsContainer extends React.Component {
	componentDidMount() {}




render(){

  return(
    <div>
    <div>
      <React.Fragment>
        <Router>
					<div className="top_section">
					<Header />
					<Navigation />
					</div>
					<div className="section_wrapper">
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
					</div>
				<Footer />
        </Router>
      </React.Fragment>
    </div>
    </div>
      );
  }
}
