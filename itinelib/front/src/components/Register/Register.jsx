import React from 'react';
import './register.scss';
import { Header, Button } from '../index';

const Register = ({
    onChangeEmail, onChangePassword, createUser
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser();
        console.log(handleSubmit);
    };

    const handleChangeEmail = (event) => {
        onChangeEmail(event.target.value, event.target.name);
    };

    const handleChangePassword = (event) => {
        onChangePassword(event.target.value, event.target.name);
    };

    return ( 
        <React.Fragment>
            <div className="header__register">
                <Header />
            </div>
            <h2 className="register__h2">Inscription</h2>
            <form className="register" method="post" onSubmit={handleSubmit} >
                {/* <label htmlFor="">Nom</label>
                <input type="text" placeholder="Votre nom"/>

                <label htmlFor="">Prénom</label>
                <input type="text" placeholder="Votre prénom"/> */}

                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="Votre email" onChange={handleChangeEmail} />

                <label htmlFor="">Mot de passe</label>
                <input type="password" name="password" placeholder="Votre mot de passe" onChange={handleChangePassword} />

                <Button
                    type="button" 
                    size="medium" 
                    value="S'inscrire" 
                    color="lightgreen"
                />
            </form>
        </React.Fragment>
     );
}
 
export default Register ;