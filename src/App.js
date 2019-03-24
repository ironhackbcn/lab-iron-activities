import React, { Component } from 'react';

// CSS
import 'bulma/css/bulma.css'
import './style.css'

// Components
import Navbar from './components/Navbar'
import CardsList from './components/CardsList'
import ActivityDetail from './components/ActivityDetail'

// Router
import { Switch, Route } from 'react-router-dom'

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

  handleRemoveFromCart = (updatedCartList) => {
    this.setState(
      { cart: [...updatedCartList] }
    )
  }

  handleAddToFavorite = (newActivity) => {
    this.setState(
      { favorite: [...this.state.favorite, newActivity] }
    )
  }

  handleRemoveFromFavorite = (updatedFavoriteList) => {
    this.setState(
      { favorite: [...updatedFavoriteList] }
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
              removeFromCart: this.handleRemoveFromCart,
              removeFromFavorite: this.handleRemoveFromFavorite
            }
          }
        >
          <Route path='/' component={Navbar} />
          <Route exact path='/' component={CardsList} />
          <Route exact path='/activity/:id' component={ActivityDetail} />
        </Context.Provider>
      </section>
    );
  }
}
export default App;
