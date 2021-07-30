import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import './users.scss';



class Users extends React.Component {
    constructor(props){
        super(props);
        this.state={
            prenom: '',
            nom: '',
            age:'',
            ville:''
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Bonjour {this.state.prenom}</h1>
                <div id="user">
                    <div className="h2e">
                    <h2>Votre Profile</h2>
                    </div>
                    <div id="photo">
                        <img src={Avatar} alt="user_profile" />
                    </div>
                    <form id="formUser">
                        <label name="firstname">Prénom: {this.state.prenom} </label>
                        <label name="lastname">Nom: {this.state.nom} </label>
                        <label name="age">Age: {this.state.age} </label>
                        <label name="town">Ville: {this.state.ville} </label>
                        <label name="preference">Préférence</label>
                        <select name="preference" id="">
                            <option value="velo">Velo</option>
                            <option value="pieds">A pieds</option>
                            <option value="quad">Quad</option>
                        </select>
                    </form>
                    <div className="h2e">
                    <h3>Historique des itineraires</h3>
                    /</div>
                    <div id="historique">
                        <div id="trajet">
                            <p>Départ:</p>
                            <p>Arrivé:</p>
                        </div>
                        <p id="mode">Mode :</p>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Users;