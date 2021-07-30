import React from 'react';
import logo from '../../assets/images/logo.png';
import './login.scss';

export class Login extends React.Component {
   
    onSubmitHandler(event) {
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <div id="container">
                    <div id="logo">
                        <img src={logo} alt="Itinelib" />
                    </div>
                    <h1>Connectez-vous</h1>
                    <form onSubmit={this.onSubmitHandler}>

                        <div id="email">

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />

                        </div>

                        <div id="password">

                            <label htmlFor="password" name="">Mot de passe</label>
                            <input type="password" name="password" id="password" />

                        </div>

                        <button type="submit">Se connecter</button>
                    </form>
                    <p> <a href="inscription">Vous n'avez pas de compte?</a></p>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
