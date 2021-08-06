import React from 'react';
import './about.scss';
import { Header } from '../index';

class About extends React.Component {
    render() {
      return (
        <div className="about">
            <Header />
            <section className="about__content">
                <h1>Qui sommes-nous ?</h1>
                <p>L'application Itinelib est votre meilleur allié quand vous êtes en vacances et que vous souhaitez faire une balade en vélo, en quad ou tout simplement à pied.</p>
                    
                <p>Nous avons créé Itinelib pour tous les aventuriers, les amoureux de la nature et du plein air. C'est un service collaboratif où chaque personne pourra partager ses propres itinéraires et consulter ceux des autres utilisateurs.</p>

                <p>Alors, qu'attendez-vous pour rejoindre la communauté ?</p>

                <button class="button">
                  S'inscrire
                </button>
            </section>
            <section className="about__team">
                <h1>La team</h1>
                <article className="about__team--card">
                  <h2>Jean-Baptiste MENARD</h2>
                </article>
                <article className="about__team--card">
                  <h2>Luc-Olivier YOHAN</h2>
                </article>
                <article className="about__team--card">
                  <h2>Mandel AGBOVON</h2>
                </article>
            </section>
        </div>
      );
    }
  }

export default About;