import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Activities from './pages/Activities';
import '../src/App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Activities}/>              
      </Router>
    );
  }
}

export default App;
