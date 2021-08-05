import React from 'react';
import './homebody.scss';
import { Button } from '../../index';
import { NavLink } from 'react-router-dom';

class Homebody extends React.Component {
    render() {
      return (
        <div className="body__menu">
            <h2 className="body__title">Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec vos proches.</h2>
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