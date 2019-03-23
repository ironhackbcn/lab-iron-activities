import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css'
import './style.css'

// Components
import Navbar from './components/Navbar'
import CardsList from './components/CardsList'

// Context
const Context = React.createContext();
export const Consumer = Context.Consumer

class App extends Component {
  state = {
    cart: [],
  }

  handleAddToCart = (newActivity) => {
    this.setState(
      { cart: [...this.state.cart, newActivity] }
    )
  }

  render() {
    return (
      <section>
        <Context.Provider
          value={
            { 
              addToCart: this.handleAddToCart,
              cart: this.state.cart,
            }
          }
        >
        <Navbar />
        <CardsList />
        </Context.Provider>
      </section>
    );
  }
}
export default App;
