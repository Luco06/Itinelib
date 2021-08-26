import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import Logout from '../../assets/images/logout.svg';
import './users.scss';
import Header from '../Header/header';



class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: 'John',
            nom: 'Doe',
            age: 30,
            ville: 'Paris'
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="user">
                    <Header />
                    <h1 className="user__header">Bonjour {this.state.prenom}</h1>
                    <img className="user__logout" src={Logout} alt="Deconnexion"/>
                    <div className="user__infos">
                        <div className="user__avatar">
                            <img src={Avatar} alt="user_profile" />
                            <p>Changer la photo de profil</p>
                        </div>
                        <form className="user__form">
                            <h2>Votre Profil</h2>
                            <label name="firstname">Prénom : {this.state.prenom} </label>
                            <label name="lastname">Nom : {this.state.nom} </label>
                            <label name="age">Age : {this.state.age} </label>
                            <label name="town">Ville : {this.state.ville} </label>
                            {/* <label name="preference">Préférence</label>
                            <select name="preference">
                                <option value="velo">Velo</option>
                                <option value="pieds">A pieds</option>
                                <option value="quad">Quad</option>
                            </select> */}
                        </form>
                        <div className="user__historique">
                            <h2>Historique des itineraires</h2>
                            <section className="user__historique--card">
                                <p>Départ :</p>
                                <p>Arrivée :</p>
                                <p>Mode :</p>
                            </section>
                            <section className="user__historique--card">
                                <p>Départ :</p>
                                <p>Arrivée :</p>
                                <p>Mode :</p>
                            </section>
                            <section className="user__historique--card">
                                <p>Départ :</p>
                                <p>Arrivée :</p>
                                <p>Mode :</p>
                            </section>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}

export default Users;