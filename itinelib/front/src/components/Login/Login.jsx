import React from 'react';
import { Header, Button } from '../index';
import Logo from '../../assets/images/Logo-svg.svg';
import './login.scss';


export class Login extends React.Component {

    onSubmitHandler(event) {
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="login">
                    <div className="login__logo">
                        <img className="login__img" src={Logo} alt="Itinelib" />
                    </div>
                    <h1 className="login__header">Connexion</h1>

                    <form onSubmit={this.onSubmitHandler} className="login__form">
                        <label className="login__label" htmlFor="email">Email</label>
                        <input className="login__input" type="email" name="email" id="email" placeholder="Votre email" />
                        
                        <label className="login__label" htmlFor="password" name="">Mot de passe</label>
                        <input className="login__input" type="password" name="password" id="password" placeholder="Mot de passe" />

                        <Button
                            className="register__submit" 
                            type="submit" 
                            size="medium" 
                            value="Se connecter" 
                            color="white"
                        />
                    </form>
                    <p>
                        <a href="inscription">Vous n'avez pas de compte?</a>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;