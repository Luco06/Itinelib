import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav>
            {/*
                Par defaut, les urls qui correspondent, auront la classe 'active'
                on peut redefinir la classe a ajouter avec 
                activeClassName="current"
            */}
            <NavLink exact to="/">
                Accueil
            </NavLink> 
            <NavLink exact to="/login">
                Connexion
            </NavLink>
            <NavLink exact to="/inscription">
                Inscription
            </NavLink>
        </nav>
    );
}
export default Navigation;