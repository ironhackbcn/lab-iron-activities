import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Activities from './components/Activities';

class App extends Component {
  render() {
    return (
      <div>
        App
        <Route path={`/`} component={Activities} />
        
      </div>
    );
  }
}

export default App;
