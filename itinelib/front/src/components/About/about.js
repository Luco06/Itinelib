import React from 'react';
import './about.scss';
import Header from '../Home/Header/header';
import Image from '../../assets/images/about.jpg';

class About extends React.Component {
    render() {
      return (
        <div className="about">
            <Header />
            <img src={Image} className="about__img" alt="landscape" />
            <section className="about__content">
                <h1>Qui sommes-nous ?</h1>
                <p>L'application Itinelib est votre meilleur allié quand vous êtes en vacances et que vous souhaitez faire une balade en vélo, en quad ou tout simplement à pied.</p>
                    
                <p>Nous avons créé Itinelib pour tous les aventuriers, les amoureux de la nature et du plein air. C'est un service collaboratif où chaque personne pourra partager ses propres itinéraires et consulter ceux des autres utilisateurs.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto, quasi hic id mollitia nisi architecto quas impedit porro dolore repudiandae sapiente soluta praesentium aperiam necessitatibus odit quidem! Rerum beatae aspernatur soluta placeat molestias ducimus aliquam voluptates debitis facilis aliquid culpa, vero porro voluptatum necessitatibus. Quod suscipit consectetur ipsam non enim necessitatibus nemo mollitia officiis ad ab? Dolores explicabo voluptatibus autem voluptas. Recusandae numquam minima saepe, at dolor tenetur omnis reprehenderit, dignissimos ea, vitae eum odio id cum. Rerum modi commodi neque ea, tenetur ab quae facere dolor in sapiente maxime praesentium debitis magnam molestias possimus eum eligendi itaque necessitatibus!</p>
            </section>
        </div>
      );
    }
  }

export default About;