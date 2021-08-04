import React from 'react';
import './register.scss';

class Register extends React.Component {
    render() { 
        return ( 
            <React.Fragment>
                <h2 className="register__h2">Inscription</h2>
                <form className="register">
                    <label htmlFor="">Nom</label>
                    <input type="text" placeholder="Votre nom"/>

                    <label htmlFor="">Prénom</label>
                    <input type="text" placeholder="Votre prénom"/>

                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Votre email"/>

                    <label htmlFor="">Mot de passe</label>
                    <input type="password" placeholder="Votre mot de passe"/>
                    <input type="submit" value="Valider"/>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Register ;