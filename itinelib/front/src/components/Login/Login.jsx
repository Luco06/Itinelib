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
<<<<<<< HEAD
                <Header />
               
                <div className="login__page">

=======
                <div className="login__page">

                    <Header />
>>>>>>> 194490a640befdbf7de24255fd90c8528f5643e4
                    <div className="login__container">
                        <div className="login__logo">
                            <img className="login__img" src={logo} alt="Itinelib" />
                        </div>
<<<<<<< HEAD
                        <h1 className="login__h1">Bienvenue sur Itinelib</h1>
=======
                        <h1 className=" login__h1">Connectez-vous</h1>
>>>>>>> 194490a640befdbf7de24255fd90c8528f5643e4
                        <form onSubmit={this.onSubmitHandler} className="login__form">

                            <div className="login__email">

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />

                            </div>

                            <div className="login__password">

                                <label htmlFor="password" name="">Mot de passe</label>
                                <input type="password" name="password" id="password" />

                            </div>

<<<<<<< HEAD
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
=======
                            <button className="login__button" type="submit">Se connecter</button>
                        </form>
                        <p className="login__p"> <a href="inscription">Vous n'avez pas de compte?</a></p>
>>>>>>> 194490a640befdbf7de24255fd90c8528f5643e4
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Login;