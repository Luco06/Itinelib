import React from 'react';
import axios from 'axios';
import './register.scss';
import { Button } from '../index';
import logo from '../../assets/images/logo.png'

export default class Register extends React.Component {
    state = {
        email: "",
        password: "",
        prenom: "",
        nom:""
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }
    handlePrenom = event => {
        this.setState({ prenom: event.target.value });
    }
    handleNom = event => {
        this.setState({ nom: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        const prenom = this.state.prenom;
        const nom = this.state.nom;
        console.log(email, prenom, password, nom)
        axios.post(`http://localhost:3200/register`, { firstname:prenom, lastname:nom, email, password })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="register__page">
                    <div className="register__container">
                        <div className="register__logo">
                            <img className="register__img" src={logo} alt="Itinelib" />
                        </div>
                        <h1 className="register__h1">Inscription</h1>

                        <form className="register__form" method="post" onSubmit={this.handleSubmit}>
                            <label className="register__label" htmlFor="">Nom</label>
                            <input className="register__input" name="lastname" type="text" placeholder="Votre nom" onChange={this.handleNom} />

                            <label className="register__label" htmlFor="">Prénom</label>
                            <input className="register__input" name="firstname" type="text" placeholder="Votre prénom" onChange={this.handlePrenom} />

                            <label className="register__label" htmlFor="">Email</label>
                            <input className="register__input" name="email" type="email" placeholder="Votre email" onChange={this.handleEmail} />

                            <label className="register__label" htmlFor="">Mot de passe</label>
                            <input className="register__input" name="password" type="password" placeholder="Mot de passe" onChange={this.handlePassword} />
                            <Button
                                type="submit"
                                size="medium"
                                value="S'inscrire"
                                color="lightgreen"
                            />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
