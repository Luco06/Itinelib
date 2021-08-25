import React from 'react';
import axios from 'axios';
import './register.scss';
import { Header } from '../index';
import Logo from '../../assets/images/Logo-svg.svg';

export default class Register extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        axios.post(`http://localhost:3200/register`, { email, password })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="register__page">
                    <div className="register__container">
                        <div className="register__logo">
                            <img className="register__img" src={Logo} alt="Itinelib" />
                        </div>
                        <h1 className="register__h1">Inscription</h1>

                        <form className="register__form" method="post" onSubmit={this.handleSubmit}>
                            <label className="register__label" htmlFor="">Email</label>
                            <input className="register__input" name="email" type="email" placeholder="Votre email" onChange={this.handleEmail} />

                            <label className="register__label" htmlFor="">Mot de passe</label>
                            <input className="register__input" name="password" type="password" placeholder="Mot de passe" onChange={this.handlePassword} />

                            <input type="submit" value="S'inscrire" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
