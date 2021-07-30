import React from 'react';
import Header from '../Header/header.js';
import Footer from '../Footer/footer.js';
import Image from '../../assets/images/backgroundhome.jpg';

class Home extends React.Component {

    render () {
        return (
          <div>
            <Header className="header" />
            <img src={Image} alt="background" />
            <Footer />
          </div>
        )
    }
  }

export default Home;