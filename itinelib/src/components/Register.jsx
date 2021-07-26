import React from 'react';
import '../assets/style/register.scss';

class Register extends React.Component {
    render() { 
        return ( 
            <React.Fragment>
                <h2>Iscription</h2>
                <form>
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