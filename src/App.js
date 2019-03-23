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
    favorite: [],
  }

  handleAddToCart = (newActivity) => {
    this.setState(
      { cart: [...this.state.cart, newActivity] }
    )
  }

  handleAddToFavorite = (newActivity) => {
    this.setState(
      { favorite: [...this.state.favorite, newActivity] }
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
              addToFavorite: this.handleAddToFavorite,
              favorite: this.state.favorite,
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
