import React, { Component } from 'react';
import museumsList from './data/data.json';
import './Styles/app.css'

import Navbar from './components/navbar/Navbar.js';
import Card from './components/card/Card';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faStar);

class App extends Component {
  
  state = {
    museums: museumsList.splice(0, 18),
  }

  listMuseums = () => {
    const { museums } = this.state;

    return museums.map((museum) => {
      return <Card
        title={museum.title}
        description={museum.description}
        price={museum.retail_price.formatted_value}
        url={museum.cover_image_url}
        />
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.listMuseums()}
        </div>
      </div>
    );
  }
}

export default App;
