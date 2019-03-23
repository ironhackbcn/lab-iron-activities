import React, { Component } from 'react';
import Provider from './components/context/Provider';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Navbar />
          <Cards />
        </Provider>
      </div>
    );
  }
}

export default App;
