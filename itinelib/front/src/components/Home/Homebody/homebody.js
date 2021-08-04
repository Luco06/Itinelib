import React from 'react';
import './homebody.scss';
import Button from '../../Button/button';
import { NavLink } from 'react-router-dom';

class Homebody extends React.Component {
    render() {
      return (
        <div className="body__menu">
            <h2 className="body__title">Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec vos proches.</h2>
            <NavLink className="body__link" to="/map">
              <Button 
              className="body__btn" type="button" size="medium" value="Accéder aux itinéraires" color="green"/>
            </NavLink>
        </div>
      );
    }
  }

export default Homebody;