import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css'
import './style.css'

// Components
import CardsList from './components/CardsList'

// Context
const MyContext = React.createContext();
export const Consumer = MyContext.Consumer

class App extends Component {
  render() {
    return (
      <section>
        <MyContext.Provider value={'Provider'}>
          <CardsList />
        </MyContext.Provider>
      </section>
    );
  }
}
export default App;
