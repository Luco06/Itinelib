import React from 'react';
import './contact.scss';
import Header from '../Home/Header/header';

class Contact extends React.Component {
    render() {
      return (
        <div className="contact">
            <Header class="header__dark" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="form">
                <div class="title">Nous contacter</div>
                <div class="subtitle">N'hésites pas à nous envoyer un message</div>
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">First name</label>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Last name</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email</label>
                </div>
                <button type="text" class="submit">submit</button>
            </div>
        </div>
      );
    }
  }

export default Contact;