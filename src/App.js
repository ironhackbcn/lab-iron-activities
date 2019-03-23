import React, { Component } from 'react';
import CardList from './components/CardList';
import ContextProvider from '../src/Context/ContextProvider';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CardId from './components/CardId';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <ContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={CardList} />
            <Route path='/:id' component={CardId} />
          </Switch>
        </ContextProvider>
      </Router>
      </>
    );
  }
}

export default App;
