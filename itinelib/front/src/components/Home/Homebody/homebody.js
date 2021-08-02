import React from 'react';
import './homebody.scss';

class Homebody extends React.Component {
    render() {
      return (
        <div className="body__menu">
            <h2 className="body__title">Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec vos proches.</h2>
            <button 
                type="button"
                className="body__btn">
                Accéder aux itinéraires
            </button>
        </div>
      );
    }
  }

export default Homebody;