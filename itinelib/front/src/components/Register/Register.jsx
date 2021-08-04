import React from 'react';
import './register.scss';
import logo from '../../assets/images/logo.png';



class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="register__page">
                    <div className="register__container">
                        <div className="register__logo">
                            <img className="register__img" src={logo} alt="Itinelib" />
                        </div>
                        <h1 className="register__h1">Inscription</h1>
                        <form className="register__form">
                            <label className="register__label" htmlFor="">Nom</label>
                            <input className="register__input" type="text" placeholder="Votre nom" />

                            <label className="register__label" htmlFor="">Prénom</label>
                            <input className="register__input" type="text" placeholder="Votre prénom" />

                            <label className="register__label" htmlFor="">Email</label>
                            <input className="register__input" type="email" placeholder="Votre email" />

                            <label className="register__label" htmlFor="">Mot de passe</label>
                            <input className="register__input" type="password" placeholder="Mot de passe" />
                            <input className="register__input" type="submit" value="Valider" />
                        </form>
                    </div>

                </div>
                
            </React.Fragment>
        );
    }
}

export default Register;