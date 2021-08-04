import React from 'react';
import './homebody.scss';
import Button from '../../Button/button';

class Homebody extends React.Component {
    render() {
      return (
        <div className="body__menu">
            <h2 className="body__title">Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec vos proches.</h2>
            <Button 
              className="body__btn" type="button" size="medium" value="Accéder aux itinéraires" color="green"/>
        </div>
      );
    }
  }

export default Homebody;