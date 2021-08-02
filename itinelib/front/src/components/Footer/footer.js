import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

class Footer extends React.Component {
    render() {
      return (
        <div>
            <nav class="footer__menu">
                <li><NavLink to="/">Mentions légales</NavLink></li>
                <li><NavLink to="/">L'équipe</NavLink></li>
                <li><NavLink to="/">À propos</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
            </nav>
        </div>
      );
    }
  }

export default Footer;