import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
// import Header from './components/Header';
// import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="row">
        {/* <Header /> */}
        <Card />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
