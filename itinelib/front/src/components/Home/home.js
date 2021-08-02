import React from 'react';
import Header from '../Header/header.js';
import Footer from '../Footer/footer.js';
import './home.scss';

class Home extends React.Component {

    render () {
        return (
          <div className="homepage">
            <Header className="header__menu" />
            <Footer className="footer__menu" />
          </div>
        )
    }
  }

export default Home;