import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css'
import './style.css'

// Components
import CardsList from './components/CardsList'

class App extends Component {

  render() {
    return (
      <section>
        <CardsList />
      </section>
    );
  }
}

export default App;
