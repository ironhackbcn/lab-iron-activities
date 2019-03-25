import React, { Component } from 'react';
import Provider from './context/Provider';
import Navbar from './Navbar';
import Cards from './Cards';

class Index extends Component {
  render() {
    return (
      <Provider>
        <Navbar />
        <Cards />
      </Provider>
    );
  }
}

export default Index;
