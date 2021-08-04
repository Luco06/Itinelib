import React from 'react';
import Header from './Header/header';
import Homebody from './Homebody/homebody';
import Footer from './Footer/footer';
import './home.scss';

class Home extends React.Component {

    render () {
        return (
          <div className="homepage">
            <Header className="header__menu" />
            <Homebody className="body__menu" />
            <div className="homepage__footer">
              <Footer className="footer__menu" />
            </div>
          </div>
        )
    }
  }

export default Home;