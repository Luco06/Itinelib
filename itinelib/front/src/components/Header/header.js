import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
    render() {
      return (
        <nav className="header__menu">
          <li className="header__menu__li"><NavLink to="/">Home</NavLink></li>
          <li className="header__menu__li"><NavLink to="/">Itinéraires</NavLink></li>
          <li className="header__menu__li"><NavLink to="/">Qui sommes-nous ?</NavLink></li>
          <li className="header__menu__li"><NavLink to="/">Nous contacter</NavLink></li>
        </nav>
      );
    }
  }

export default Header;