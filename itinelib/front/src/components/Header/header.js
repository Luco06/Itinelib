import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
    render() {
      return (
        <nav className="header__menu">
          <li className="header__menu__li"><NavLink to="/"><i className="fas fa-home"></i></NavLink></li>
          <li className="header__menu__li"><NavLink to="/login"><i className="far fa-user"></i></NavLink></li>  
          <li className="header__menu__li"><NavLink to="/map">Itinéraires</NavLink></li>
          <li className="header__menu__li"><NavLink to="/about">Qui sommes-nous ?</NavLink></li>
          <li className="header__menu__li"><NavLink to="/contact">Nous contacter</NavLink></li>      
        </nav>
      );
    }
  }

export default Header;