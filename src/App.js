import React, { Component } from 'react';
import data from './data/data.json';
import { Route, Switch, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';
import './styles/app.css';

class App extends Component {

  state = {
    activities: data,
  }

  render() {
    return (
      <div className='App'>

        <NavBar />

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/activities' component={ CardList } />
          <Route exact path='/activities/:id' component={ CardDetails } />
        </Switch>

      </div>
    );
  }
}

export default App;
