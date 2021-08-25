import React from 'react';
import { Header, Button } from '../index';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './login.scss';


export class Login extends React.Component {

    onSubmitHandler(event) {
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <Header />
               
                <div className="login__page">

                    <div className="login__container">
                        <div className="login__logo">
                            <img className="login__img" src={logo} alt="Itinelib" />
                        </div>
                        <h1 className="login__h1">Bienvenue sur Itinelib</h1>
                        <form onSubmit={this.onSubmitHandler} className="login__form">

                            <div className="login__email">

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />

                            </div>

                            <div className="login__password">

                                <label htmlFor="password" name="">Mot de passe</label>
                                <input type="password" name="password" id="password" />

                            </div>

                            <Button 
                                type="submit" 
                                size="small"
                                value="Se connecter" 
                                color="lightgreen"
                            />
                        </form>
                        <NavLink to="/inscription">
                            <Button 
                                type="button" 
                                size="small" 
                                value="Vous n'avez pas de compte ?" 
                                color="lightgreen"
                            />
                        </NavLink>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Login;