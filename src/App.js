import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventDetails from './components/EventDetails';
import NoMatch from './components/NoMatch';
import Index from './components/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/event/:eventId' component={EventDetails} />
            <Route exact path='/page/:pageNumber' component={Index} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;