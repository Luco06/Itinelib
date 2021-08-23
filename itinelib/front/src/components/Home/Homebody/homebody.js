import React from 'react';
import './homebody.scss';
import { Button } from '../../index';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/Logo-svg.svg';

class Homebody extends React.Component {
    render() {
      return (
        <div className="body__menu">
            <img className="body__logo" src={Logo} alt="logo" />
            <h2 className="body__title">Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec la communauté.</h2>
            <NavLink className="body__link" to="/map">
              <Button 
                type="button" 
                size="medium" 
                value="Accéder aux itinéraires" 
                color="darkgreen"/>
            </NavLink>
        </div>
      );
    }
  }

export default Homebody;