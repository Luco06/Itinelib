import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class Header extends React.Component {
    render() {
      return (
        <div>
            <nav class="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Itinéraires</NavLink></li>
                <li><NavLink to="/">Qui sommes-nous ?</NavLink></li>
                <li><NavLink to="/">Nous contacter</NavLink></li>
                <form>
                    <input 
                      type="search" 
                      placeholder="Rechercher" aria-label="Rechercher"
                    />
                    <button type="submit">
                      OK
                    </button>
                </form>
            </nav>
        </div>
      );
    }
  }

export default Header;