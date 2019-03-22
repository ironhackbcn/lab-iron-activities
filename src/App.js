import React, { Component } from 'react';
import CardList from './components/CardList';
import ContextProvider from '../src/Context/ContextProvider';
import Navbar from '../src/components/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <ContextProvider>
          <Navbar />
          <CardList />
        </ContextProvider>
      </>
    );
  }
}

export default App;
