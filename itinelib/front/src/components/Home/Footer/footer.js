import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

class Footer extends React.Component {
    render() {
      return (
        <nav class="footer__menu">
          <li className="footer__menu__li"><NavLink to="/">Mentions légales</NavLink></li>
          <li className="footer__menu__li"><NavLink to="/">L'équipe</NavLink></li>
        </nav>
      );
    }
  }

export default Footer;