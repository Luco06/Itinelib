import React from 'react'
import Avatar from '../assets/images/avatar.png'
import '../assets/style/user.scss'



class Users extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Bonjour 'Users'</h1>
                <div id="container">
                    <h2>Votre Profile</h2>
                    <div id="photo">
                        <img src={Avatar} alt="user_profile" />
                    </div>
                    <form>
                        <label name="firstname">Prénom: </label>
                        <label name="lastname">Nom: </label>
                        <label name="age">Age: </label>
                        <label name="town">Ville: </label>
                        <label name="preference">Préférence</label>
                        <select name="preference" id="">
                            <option value="velo">Velo</option>
                            <option value="pieds">A pieds</option>
                            <option value="quad">Quad</option>
                        </select>
                    </form>
                    <h3>Historique des itineraires</h3>
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