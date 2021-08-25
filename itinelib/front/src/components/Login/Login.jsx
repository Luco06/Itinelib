import React from 'react';
import logo from '../../assets/images/Logo-svg.svg';
import './login.scss';
import { Header } from '../index';


export class Login extends React.Component {

    onSubmitHandler(event) {
        event.preventDefault();

    }
    render() {
        return (
            <React.Fragment>
                <div className="login__page">

                    <Header />
                    <div className="login__container">
                        <div className="login__logo">
                            <img className="login__img" src={logo} alt="Itinelib" />
                        </div>
                        <h1 className=" login__h1">Connectez-vous</h1>
                        <form onSubmit={this.onSubmitHandler} className="login__form">

                            <div className="login__email">

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />

                            </div>

                            <div className="login__password">

                                <label htmlFor="password" name="">Mot de passe</label>
                                <input type="password" name="password" id="password" />

                            </div>

                            <button className="login__button" type="submit">Se connecter</button>
                        </form>
                        <p className="login__p"> <a href="inscription">Vous n'avez pas de compte?</a></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
