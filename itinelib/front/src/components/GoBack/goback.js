import React from 'react';
import './goback.scss';

const GoBack = (props) => {
    return (
      <>
        <button onClick={() => props.history.goBack()}>Retour</button>
      </>
    );
};

export default GoBack;