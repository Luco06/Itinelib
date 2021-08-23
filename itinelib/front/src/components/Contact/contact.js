import React from 'react';
import './contact.scss';
import { Header, Button } from '../index';

class Contact extends React.Component {
    render() {
      return (
        <div className="contact">
            <div className="contact__header">
              <Header />
            </div>
            <form className="contact__form" action="">
              <h2 class="contact__title">Nous contacter</h2>
              <p className="contact__subtitle">Une question ? une remarque ? N'hésitez pas à nous contacter via le formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais.</p>
              <label htmlFor="">Prénom</label>
              <input type="text" />
              <label htmlFor="">Nom</label>
              <input type="text" />
              <label htmlFor="">Adresse email</label>
              <input type="text" />
              <label htmlFor="">Votre message</label>
              <textarea name="message" id="message" cols="30" rows="8"></textarea>
              <Button 
                type="button" 
                size="medium" 
                value="Envoyer" 
                color="white"/>
            </form>
        </div>
      );
    }
  }

export default Contact;