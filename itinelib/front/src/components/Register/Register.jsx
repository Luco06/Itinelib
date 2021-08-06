import React from 'react';
import axios from 'axios';
import './register.scss';
import { Header, Button } from '../index';

export default class Register extends React.Component {
    state = {
        email: "", 
        password: ""
    }

    handleEmail = event => {
        this.setState({email: event.target.value});
    }

    handlePassword = event => {
        this.setState({password: event.target.value});
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
                <div className="header__register">
                    <Header />
                </div>
                <h2 className="register__h2">Inscription</h2>
                <form className="register" method="post" onSubmit={this.handleSubmit}>
    
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="Votre email" onChange={this.handleEmail} />
    
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" name="password" placeholder="Votre mot de passe" onChange={this.handlePassword} />
    
                    <Button
                        type="submit" 
                        size="medium" 
                        value="S'inscrire" 
                        color="lightgreen"
                    />
                </form>
            </React.Fragment>
        );
    }
}