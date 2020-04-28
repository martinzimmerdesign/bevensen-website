import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () =>
    <div className="footer">
      <p className="footer_text">
<NavLink to="/impressum"><span>Impressum</span></NavLink>&nbsp;|&nbsp;
<NavLink to="/datenschutzerklärung"><span>Datenschutzerklärung</span></NavLink><br />
Copyright © 2020 Gefäßpraxis Bevensen
      </p>
    </div>
export default Footer;
