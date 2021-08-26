import React from 'react';
import Avatar from '../../assets/images/avatar.png';
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
                    <div className="user__infos">
                        <section className="user__form">
                            <h2>Votre Avatar</h2>
                            <img src={Avatar} alt="user_profile" />
                            <p>Changer la photo de profil</p>
                        </section>
                        <section className="user__form">
                            <h2>Votre Profil</h2>
                            <form action="">
                                <label name="firstname">Prénom : {this.state.prenom} </label>
                                <label name="lastname">Nom : {this.state.nom} </label>
                                <label name="age">Age : {this.state.age} </label>
                                <label name="town">Ville : {this.state.ville} </label>
                            </form>
                        </section>
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
                        <div className="user__logout">
                            <p><i class="fas fa-sign-out-alt"></i>Se déconnecter</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Users;