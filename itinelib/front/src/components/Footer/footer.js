import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class Footer extends React.Component {
    render() {
      return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <li><NavLink to="/">Mentions légales</NavLink></li>
            </nav>
        </div>
      );
    }
  }

export default Footer;