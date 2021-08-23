import React from 'react';
import './about.scss';
import { Header, Button } from '../index';
import { NavLink } from 'react-router-dom';
import JB from '../../assets/images/JB.jpg';
import Luco from '../../assets/images/Luco.jpg';
import Mandel from '../../assets/images/Mandel.gif';

class About extends React.Component {
    render() {
      return (
        <div className="about">
            <Header />
            <section className="about__content">
                <h1>Qui sommes-nous ?</h1>
                <p>L'application Itinelib est votre meilleur allié quand vous planifiez de partir en vacances, en famille ou entre amis, ou bien lors d'un déplacement professionnel.</p>
                    
                <p>Nous avons créé Itinelib pour tous les aventuriers de la route. C'est un service collaboratif où chaque personne pourra partager ses propres itinéraires et consulter ceux des autres utilisateurs.</p>

                <p>Alors, qu'attendez-vous pour rejoindre la communauté ?</p>

                <NavLink to="/inscription">
                  <Button 
                    type="button" 
                    size="small" 
                    value="S'inscrire" 
                    color="lightgreen"
                  />
                </NavLink>
                <h1>La team</h1>
                <div className="about__team">
                  <article className="about__team__card">
                    <img src={JB} alt="jb" />
                    <h2>Jean-Baptiste MENARD</h2>
                    <a href="https://www.linkedin.com/in/jbmenard/" rel="noreferrer" target="_blank">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/jbmenard" rel="noreferrer" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </article>
                  <article className="about__team__card">
                    <img src={Luco} alt="luco" />
                    <h2>Luc-Olivier YOHAN</h2>
                    <a href="https://www.linkedin.com/in/luc-olivier-yohan-837073159/" rel="noreferrer" target="_blank">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Luco06" rel="noreferrer" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </article>
                  <article className="about__team__card">
                    <img src={Mandel} alt="mandel" />
                    <h2>Mandel AGBOVON</h2>
                    <i class="fab fa-linkedin-in"></i>
                    <a href="https://github.com/Mandel-AG" rel="noreferrer" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </article>
                </div>
            </section>
        </div>
      );
    }
  }

export default About;