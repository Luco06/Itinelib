import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import './users.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';



class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            age: '',
            ville: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="user__page">

                    <Header />
                    <h1 className="user__h1">Bonjour {this.state.prenom}</h1>
                    <div className="user">
                        <div className="user__h2e">
                            <h2>Votre Profile</h2>
                        </div>
                        <div className="user__photo">
                            <img className="user__img" src={Avatar} alt="user_profile" />
                        </div>
                        <form className="user__form">
                            <label name="firstname">Prénom: {this.state.prenom} </label>
                            <label name="lastname">Nom: {this.state.nom} </label>
                            <label name="age">Age: {this.state.age} </label>
                            <label name="town">Ville: {this.state.ville} </label>
                            <label name="preference">Préférence</label>
                            <select name="preference">
                                <option value="velo">Velo</option>
                                <option value="pieds">A pieds</option>
                                <option value="quad">Quad</option>
                            </select>
                        </form>
                        <div className="user__h2e">
                            <h2>Historique des itineraires</h2>
                        </div>
                        <div className="user__historique">
                            <div className="user__trajet">
                                <p>Départ:</p>
                                <p>Arrivé:</p>
                            </div>
                            <p className="user__mode">Mode :</p>

                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Users;